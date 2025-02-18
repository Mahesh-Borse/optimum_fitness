const math = {
    lerp: (a, b, n) => (1 - n) * a + n * b,
};

export class Cursor {
    constructor() {
        this.cursorEl = document.querySelector('[data-cursor]');
        this.trailEl = document.querySelector('[data-cursor-trail]');
        this.stickies = [...document.querySelectorAll('[data-stick-cursor]')];

        this.data = {
            mouse: { x: 0, y: 0 },
            cursor: { x: 0, y: 0 },
            trail: { x: 0, y: 0 },
            cursorEase: 0.08,
            trailEase: 0.04,
        };

        this.run = this.run.bind(this);
        this.mousePos = this.mousePos.bind(this);
        this.checkHoverState = this.checkHoverState.bind(this);

        this.init();
    }

    mousePos(e) {
        this.data.mouse.x = e.clientX;
        this.data.mouse.y = e.clientY;
    }

    checkHoverState() {
        const elements = document.elementsFromPoint(this.data.mouse.x, this.data.mouse.y);

        const isHoveringClickable = elements.some((el) =>
            ["A", "BUTTON", "INPUT", "TEXTAREA", "SELECT"].includes(el.tagName) ||
            el.hasAttribute("data-stick-cursor")
        );

        if (isHoveringClickable) {
            this.cursorEl.classList.add("cursor-pointer");
        } else {
            this.cursorEl.classList.remove("cursor-pointer");
        }
    }

    run() {
        // Cursor smooth movement
        this.data.cursor.x = math.lerp(this.data.cursor.x, this.data.mouse.x, this.data.cursorEase);
        this.data.cursor.y = math.lerp(this.data.cursor.y, this.data.mouse.y, this.data.cursorEase);

        // Trail smooth movement
        this.data.trail.x = math.lerp(this.data.trail.x, this.data.mouse.x, this.data.trailEase);
        this.data.trail.y = math.lerp(this.data.trail.y, this.data.mouse.y, this.data.trailEase);

        // Update cursor positions
        this.cursorEl.style.top = `${this.data.cursor.y}px`;
        this.cursorEl.style.left = `${this.data.cursor.x}px`;

        this.trailEl.style.top = `${this.data.trail.y}px`;
        this.trailEl.style.left = `${this.data.trail.x}px`;

        this.checkHoverState();
        requestAnimationFrame(this.run);
    }

    addListeners() {
        window.addEventListener("mousemove", this.mousePos, { passive: true });
    }

    init() {
        this.addListeners();
        this.run();
    }
}