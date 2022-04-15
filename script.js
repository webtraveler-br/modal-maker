'use strict';

class Modal {
    constructor(modal, overlay, closeBtn) {
        this.overlay = overlay;
        this.modal = modal;
        this.closeBtn = closeBtn;
        this.isShowing = false;
        this.openers = [];
        this.overlay.addEventListener('click', () => {this.show(false)});
        this.closeBtn.addEventListener('click', () => {this.show(false)});
    }

    show(show) {
        if (this.isShowing !== show) {
            const action = show ? "remove" : "add";
            this.overlay.classList[action]('hidden');
            this.modal.classList[action]('hidden');
            this.isShowing = show;
        }
    }

    addOpener(button) {
        if (this.openers.includes(button)) {
            return false;
        }
        button.addEventListener('click', () => {this.show(true)});
    }
}

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const modalController = new Modal(modal, overlay, closeBtn);
const buttons = document.querySelectorAll(".show-modal");
buttons.forEach(button => {
    modalController.addOpener(button);
});