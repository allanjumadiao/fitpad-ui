(function() {
    const originalAlert = window.alert;

    window.alert = function(message) {
        let modal = document.getElementById('fitpad-global-alert-modal');
        
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'fitpad-global-alert-modal';
            modal.className = 'fixed inset-0 z-[9999] hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity';
            
            modal.innerHTML = `
                <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm transform scale-100 transition-transform overflow-hidden relative">
                    <!-- Header -->
                    <div class="bg-fitpad-gray px-6 py-5 border-b border-gray-100 flex justify-between items-center text-white">
                        <h3 class="text-lg font-black uppercase tracking-tight flex items-center gap-2">
                            <ion-icon name="notifications-outline" class="text-brand-yellow"></ion-icon> Notification
                        </h3>
                        <button type="button" id="fitpad-global-alert-close" class="text-gray-400 hover:text-white transition-colors">
                            <ion-icon name="close" class="text-2xl"></ion-icon>
                        </button>
                    </div>
                    <!-- Body -->
                    <div class="p-8 text-center">
                        <p id="fitpad-global-alert-message" class="text-sm text-fitpad-gray font-bold mb-8 leading-relaxed"></p>
                        <button type="button" id="fitpad-global-alert-ok" class="w-full bg-brand-yellow text-fitpad-gray px-6 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-md">
                            Got It
                        </button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);

            const closeBtn = document.getElementById('fitpad-global-alert-close');
            const okBtn = document.getElementById('fitpad-global-alert-ok');
            
            const closeModal = () => {
                modal.classList.add('hidden');
                // Restore overflow if no other modals are active
                const activeModals = document.querySelectorAll('.fixed.inset-0:not(.hidden)');
                if(activeModals.length === 0) {
                    document.body.style.overflow = '';
                }
            };
            
            closeBtn.addEventListener('click', closeModal);
            okBtn.addEventListener('click', closeModal);
        }
        
        document.getElementById('fitpad-global-alert-message').innerText = message;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };
})();
