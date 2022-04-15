'use strict';

class Modal {
    constructor(modal, overlay, closeBtn) {
        this.overlay = overlay;
        this.modal = modal;
        this.closeBtn = closeBtn;
        this.isShowing = false;
        this.openers = [];
        this.overlay.addEventListener('click', this.show);
        this.closeBtn.addEventListener('click', this.show);
    }

    show = () => {
        const action = this.isShowing ? "add" : "remove";
        const actionEvent = !this.isShowing ? "add" : "remove";
        this.overlay.classList[action]('hidden');
        this.modal.classList[action]('hidden');
        document[`${actionEvent}EventListener`]('keydown', this.escCloser);
        this.isShowing = !this.isShowing;
    }

    addOpener = (button) => {
        if (this.openers.includes(button)) {
            return false;
        }
        button.addEventListener('click', this.show);
    }

    escCloser = (evt) => {
        console.log('teste');
        evt = evt || window.event;
        var isEscape = false;
        if ("key" in evt) {
            isEscape = (evt.key === "Escape" || evt.key === "Esc");
        } else {
            isEscape = (evt.keyCode === 27);
        }
        if (isEscape) {
            this.show();
        }
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