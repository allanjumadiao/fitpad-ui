(function() {
    // 1. Identify the current screen context
    const path = window.location.pathname.toLowerCase();
    let screenKey = '';
    
    if (path.includes('dashboard.html')) screenKey = 'dashboard';
    else if (path.includes('session-list.html')) screenKey = 'session-list';
    else if (path.includes('session.html')) screenKey = 'session';
    else if (path.includes('profile.html')) screenKey = 'profile';

    if (!screenKey) return; // Not a targeted screen page

    // 2. Fetch surveys and check eligibility
    const surveys = JSON.parse(localStorage.getItem("fitpad_surveys") || "[]");
    
    // Find first active survey targeting this screen that hasn't been completed or dismissed
    const eligibleSurvey = surveys.find(survey => {
        if (!survey.active) return false;
        if (!survey.locations.includes(screenKey)) return false;
        
        const isCompleted = localStorage.getItem(`fitpad_completed_surveys_${survey.id}`) === 'true';
        const isDismissed = localStorage.getItem(`fitpad_dismissed_surveys_${survey.id}`) === 'true';
        
        return !isCompleted && !isDismissed;
    });

    if (!eligibleSurvey) return; // No eligible surveys for this page

    // 3. Inject the survey banner prepended inside <main>
    window.addEventListener('DOMContentLoaded', () => {
        const mainContainer = document.querySelector('main');
        if (!mainContainer) return;

        // Create banner element
        const banner = document.createElement('div');
        banner.id = `survey-banner-${eligibleSurvey.id}`;
        banner.className = "relative bg-fitpad-gray text-white p-6 rounded-3xl mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 overflow-hidden shadow-lg border border-white/5 transition-all duration-500 opacity-0 -translate-y-4";
        
        // Add absolute backdrop decoration glow
        banner.innerHTML = `
            <div class="absolute -right-8 -bottom-8 w-24 h-24 bg-[#d8f511]/10 rounded-full blur-xl pointer-events-none"></div>
            <div class="absolute left-0 inset-y-0 w-1.5 bg-brand-yellow"></div>
            
            <div class="flex items-start gap-4 pr-6">
                <div class="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-brand-yellow shrink-0">
                    <ion-icon name="document-text" class="text-2xl"></ion-icon>
                </div>
                <div>
                    <h4 class="text-base font-black uppercase tracking-tight flex items-center gap-2">
                        We Value Your Feedback!
                        <span class="bg-[#d8f511]/20 text-brand-yellow text-[8px] font-black px-2 py-0.5 rounded uppercase tracking-wider">Survey</span>
                    </h4>
                    <p class="text-sm font-semibold text-white/90 mt-1">${eligibleSurvey.title}</p>
                    <p class="text-xs text-gray-400 font-medium mt-1">${eligibleSurvey.description || 'Please take a brief moment to answer a few quick questions to help us improve.'}</p>
                </div>
            </div>
            
            <div class="flex items-center gap-3 shrink-0 relative z-10 self-end md:self-auto">
                <button onclick="dismissSurveyBanner('${eligibleSurvey.id}')" class="px-4 py-3 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-all">
                    Later
                </button>
                <a href="survey.html?id=${eligibleSurvey.id}&ref=${screenKey}" class="px-6 py-3 bg-brand-yellow text-fitpad-gray hover:brightness-110 rounded-xl text-xs font-black uppercase tracking-widest shadow-md transition-all">
                    Start Survey
                </a>
            </div>
            
            <!-- Close icon button top right -->
            <button onclick="dismissSurveyBanner('${eligibleSurvey.id}')" class="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors p-1" title="Dismiss">
                <ion-icon name="close" class="text-xl"></ion-icon>
            </button>
        `;

        // Prepend it as first child of <main>
        mainContainer.insertBefore(banner, mainContainer.firstChild);

        // Animate entrance
        setTimeout(() => {
            banner.classList.remove('opacity-0', '-translate-y-4');
            banner.classList.add('opacity-100', 'translate-y-0');
        }, 100);
    });
})();

// Dismiss survey banner
function dismissSurveyBanner(surveyId) {
    localStorage.setItem(`fitpad_dismissed_surveys_${surveyId}`, 'true');
    const banner = document.getElementById(`survey-banner-${surveyId}`);
    if (banner) {
        banner.classList.add('opacity-0', '-translate-y-4');
        setTimeout(() => banner.remove(), 500);
    }
}
