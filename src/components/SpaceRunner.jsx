import { useRef, useEffect, useState, useCallback } from "react";

// ─── CONSTANTS ─────────────────────────────────────────────
const CANVAS_HEIGHT = 180;
const GROUND_Y = CANVAS_HEIGHT - 30; // ground line y
const GRAVITY = 0.55;
const JUMP_FORCE = -10.5;
const INITIAL_SPEED = 2.8;
const MAX_SPEED = 7;
const SPEED_INCREMENT = 0.0003; // very gradual speed increase
const MIN_OBSTACLE_GAP = 250;
const MAX_OBSTACLE_GAP = 450;

// ─── STAR FIELD ────────────────────────────────────────────
function createStars(count, canvasWidth) {
    const stars = [];
    for (let i = 0; i < count; i++) {
        stars.push({
            x: Math.random() * canvasWidth,
            y: Math.random() * (GROUND_Y - 10),
            size: Math.random() * 1.8 + 0.3,
            speed: Math.random() * 0.6 + 0.1,
            brightness: Math.random() * 0.5 + 0.5,
        });
    }
    return stars;
}

// ─── DRAW HELPERS ──────────────────────────────────────────

// Draw a running astronaut
function drawAstronaut(ctx, x, y, frame, isRunning) {
    ctx.save();
    const h = 30; // total height
    const bx = x; // base x (left side)
    const by = y; // base y (top side)

    // Running animation - leg swing
    const legSwing = isRunning ? Math.sin(frame * 0.25) * 6 : 0;
    const armSwing = isRunning ? Math.sin(frame * 0.25) * 5 : 0;

    // ── Legs ──
    ctx.strokeStyle = "#D0D5DD";
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    // left leg
    ctx.beginPath();
    ctx.moveTo(bx + 8, by + 20);
    ctx.lineTo(bx + 6 - legSwing, by + h);
    ctx.stroke();
    // right leg
    ctx.beginPath();
    ctx.moveTo(bx + 14, by + 20);
    ctx.lineTo(bx + 16 + legSwing, by + h);
    ctx.stroke();

    // Boots
    ctx.fillStyle = "#4B5563";
    ctx.fillRect(bx + 3 - legSwing, by + h - 3, 6, 3);
    ctx.fillRect(bx + 13 + legSwing, by + h - 3, 6, 3);

    // ── Body (suit) ──
    ctx.fillStyle = "#E5E7EB";
    ctx.beginPath();
    ctx.roundRect(bx + 4, by + 10, 14, 12, 3);
    ctx.fill();

    // Backpack / life support
    ctx.fillStyle = "#6B7280";
    ctx.fillRect(bx + 1, by + 11, 4, 9);
    ctx.fillStyle = "#0096FF";
    ctx.fillRect(bx + 1.5, by + 13, 3, 2); // blue light on backpack

    // ── Arms ──
    ctx.strokeStyle = "#D0D5DD";
    ctx.lineWidth = 2.5;
    // left arm
    ctx.beginPath();
    ctx.moveTo(bx + 5, by + 13);
    ctx.lineTo(bx + 2 + armSwing, by + 20);
    ctx.stroke();
    // right arm
    ctx.beginPath();
    ctx.moveTo(bx + 17, by + 13);
    ctx.lineTo(bx + 20 - armSwing, by + 20);
    ctx.stroke();

    // ── Helmet ──
    // Helmet outer
    ctx.fillStyle = "#F3F4F6";
    ctx.beginPath();
    ctx.arc(bx + 11, by + 8, 8, 0, Math.PI * 2);
    ctx.fill();

    // Visor
    ctx.fillStyle = "#0096FF";
    ctx.shadowColor = "#00D4FF";
    ctx.shadowBlur = 5;
    ctx.beginPath();
    ctx.arc(bx + 12, by + 8, 5.5, -0.4, Math.PI * 0.9);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Visor shine
    ctx.fillStyle = "rgba(255,255,255,0.35)";
    ctx.beginPath();
    ctx.arc(bx + 14, by + 6, 2, 0, Math.PI * 2);
    ctx.fill();

    // Antenna
    ctx.strokeStyle = "#9CA3AF";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(bx + 11, by);
    ctx.lineTo(bx + 11, by - 4);
    ctx.stroke();
    // Antenna tip blink
    const antBlink = Math.sin(frame * 0.15) > 0.3;
    ctx.fillStyle = antBlink ? "#FF4040" : "#991B1B";
    ctx.beginPath();
    ctx.arc(bx + 11, by - 5, 1.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
}

function drawAsteroid(ctx, x, y, size) {
    ctx.save();
    ctx.fillStyle = "#6B7280";
    ctx.strokeStyle = "#9CA3AF";
    ctx.lineWidth = 1;
    ctx.beginPath();
    const points = 8;
    for (let i = 0; i < points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const variance = 0.7 + Math.sin(i * 7.3) * 0.3;
        const r = size * variance;
        const px = x + Math.cos(angle) * r;
        const py = y + Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // crater
    ctx.fillStyle = "#4B5563";
    ctx.beginPath();
    ctx.arc(x - size * 0.2, y - size * 0.1, size * 0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x + size * 0.25, y + size * 0.2, size * 0.15, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
}

function drawAlien(ctx, x, y, size, frame) {
    ctx.save();
    // UFO body
    ctx.fillStyle = "#7C3AED";
    ctx.beginPath();
    ctx.ellipse(x, y, size * 1.2, size * 0.5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Dome
    ctx.fillStyle = "#A78BFA";
    ctx.beginPath();
    ctx.ellipse(x, y - size * 0.3, size * 0.6, size * 0.5, 0, Math.PI, 0);
    ctx.fill();

    // Glass
    ctx.fillStyle = "#00FFB3";
    ctx.shadowColor = "#00FFB3";
    ctx.shadowBlur = 4;
    ctx.beginPath();
    ctx.ellipse(x, y - size * 0.35, size * 0.3, size * 0.25, 0, Math.PI, 0);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Lights
    const blink = Math.sin(frame * 0.2) > 0;
    if (blink) {
        ctx.fillStyle = "#FFD700";
        for (let i = -1; i <= 1; i++) {
            ctx.beginPath();
            ctx.arc(x + i * size * 0.5, y + size * 0.2, 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    ctx.restore();
}
// ─── FLAMING METEOR ────────────────────────────────────────
function drawMeteor(ctx, x, y, size, frame) {
    ctx.save();

    // Fire trail
    for (let i = 0; i < 5; i++) {
        const trailX = x + size * (0.8 + i * 0.5) + Math.sin(frame * 0.3 + i) * 2;
        const trailY = y - i * 1.5 + Math.sin(frame * 0.4 + i * 1.5) * 2;
        const trailSize = size * (0.6 - i * 0.08);
        ctx.globalAlpha = 0.6 - i * 0.1;
        ctx.fillStyle = i < 2 ? "#FF4500" : i < 4 ? "#FF6B00" : "#FFD700";
        ctx.beginPath();
        ctx.arc(trailX, trailY, trailSize, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.globalAlpha = 1;

    // Outer glow
    ctx.shadowColor = "#FF4500";
    ctx.shadowBlur = 12;

    // Rock body
    ctx.fillStyle = "#8B4513";
    ctx.beginPath();
    const points = 7;
    for (let i = 0; i < points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const variance = 0.75 + Math.sin(i * 5.7) * 0.25;
        const r = size * variance;
        const px = x + Math.cos(angle) * r;
        const py = y + Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();
    ctx.shadowBlur = 0;

    // Hot cracks
    ctx.strokeStyle = "#FF6B00";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(x - size * 0.3, y - size * 0.2);
    ctx.lineTo(x + size * 0.1, y + size * 0.1);
    ctx.lineTo(x + size * 0.4, y - size * 0.1);
    ctx.stroke();

    ctx.strokeStyle = "#FFD700";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x - size * 0.1, y + size * 0.3);
    ctx.lineTo(x + size * 0.2, y);
    ctx.stroke();

    ctx.restore();
}

// ─── DUST TRAIL ────────────────────────────────────────────
function spawnDust(dustArr, x, y) {
    dustArr.push({
        x: x + Math.random() * 4,
        y: y + Math.random() * 2,
        size: Math.random() * 2 + 1,
        life: 1,
        vx: -(Math.random() * 1.5 + 0.5),
        vy: -(Math.random() * 0.5),
    });
}

// ─── PARTICLE SYSTEM ───────────────────────────────────────
function createExplosion(x, y) {
    const particles = [];
    for (let i = 0; i < 20; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 1;
        particles.push({
            x,
            y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            life: 1,
            color: ["#FF6B00", "#FFD700", "#0096FF", "#FF0040"][
                Math.floor(Math.random() * 4)
            ],
            size: Math.random() * 3 + 1,
        });
    }
    return particles;
}

// ═══════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════
export const SpaceRunner = () => {
    const canvasRef = useRef(null);
    const gameRef = useRef({
        running: false,
        started: false,
        gameOver: false,
        score: 0,
        highScore: 0,
        speed: INITIAL_SPEED,
        frame: 0,
        // astronaut
        playerY: 0,
        playerVY: 0,
        isJumping: false,
        // obstacles
        obstacles: [],
        nextObstacle: 120,
        // stars
        stars: [],
        // particles
        particles: [],
        // dust trail
        dust: [],
        // canvas width (dynamic)
        width: 600,
    });
    const animRef = useRef(null);
    const [, forceUpdate] = useState(0);

    // get high score from localStorage
    useEffect(() => {
        const saved = localStorage.getItem("spaceRunnerHighScore");
        if (saved) gameRef.current.highScore = parseInt(saved, 10);
    }, []);

    const PLAYER_H = 32; // astronaut sprite height

    // ── JUMP ───────────────────────────────────────────────
    const jump = useCallback(() => {
        const g = gameRef.current;
        if (g.gameOver) {
            // restart
            g.gameOver = false;
            g.score = 0;
            g.speed = INITIAL_SPEED;
            g.obstacles = [];
            g.particles = [];
            g.dust = [];
            g.nextObstacle = 120;
            g.playerY = GROUND_Y - PLAYER_H;
            g.playerVY = 0;
            g.isJumping = false;
            g.started = true;
            g.running = true;
            forceUpdate((n) => n + 1);
            return;
        }
        if (!g.started) {
            g.started = true;
            g.running = true;
            g.playerY = GROUND_Y - PLAYER_H;
            g.playerVY = 0;
            forceUpdate((n) => n + 1);
        }
        if (!g.isJumping) {
            g.playerVY = JUMP_FORCE;
            g.isJumping = true;
        }
    }, []);

    // ── INPUT HANDLERS ─────────────────────────────────────
    useEffect(() => {
        const onKey = (e) => {
            if (e.code === "Space" || e.code === "ArrowUp") {
                e.preventDefault();
                jump();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [jump]);

    // ── RESIZE ─────────────────────────────────────────────
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const resize = () => {
            const parent = canvas.parentElement;
            const w = parent.clientWidth;
            canvas.width = w;
            canvas.height = CANVAS_HEIGHT;
            gameRef.current.width = w;
            gameRef.current.stars = createStars(80, w);
        };
        resize();
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);

    // ── GAME LOOP ──────────────────────────────────────────
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        const loop = () => {
            const g = gameRef.current;
            const W = g.width;
            g.frame++;

            // ── clear ─────────────────────────────────────────
            ctx.fillStyle = "#0a0e12";
            ctx.fillRect(0, 0, W, CANVAS_HEIGHT);

            // ── stars ─────────────────────────────────────────
            g.stars.forEach((s) => {
                if (g.running) {
                    s.x -= s.speed * (g.speed / INITIAL_SPEED);
                    if (s.x < 0) {
                        s.x = W;
                        s.y = Math.random() * (GROUND_Y - 10);
                    }
                }
                const twinkle = 0.5 + Math.sin(g.frame * 0.03 + s.x) * 0.3;
                ctx.fillStyle = `rgba(200, 220, 255, ${s.brightness * twinkle})`;
                ctx.fillRect(s.x, s.y, s.size, s.size);
            });

            // ── ground / planet surface ───────────────────────
            // Main ground line
            ctx.strokeStyle = "rgba(0, 150, 255, 0.3)";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(0, GROUND_Y);
            ctx.lineTo(W, GROUND_Y);
            ctx.stroke();

            // Rocky surface texture
            const gridOffset = g.running ? (g.frame * g.speed) % 40 : 0;
            ctx.fillStyle = "rgba(0, 150, 255, 0.06)";
            for (let gx = -gridOffset; gx < W; gx += 40) {
                // small rocks / pebbles
                ctx.fillRect(gx, GROUND_Y + 5, 2, 1);
                ctx.fillRect(gx + 12, GROUND_Y + 10, 3, 1);
                ctx.fillRect(gx + 25, GROUND_Y + 7, 1, 1);
                ctx.fillRect(gx + 33, GROUND_Y + 14, 2, 1);
            }
            // Subtle surface gradient
            const surfGrad = ctx.createLinearGradient(0, GROUND_Y, 0, CANVAS_HEIGHT);
            surfGrad.addColorStop(0, "rgba(0, 150, 255, 0.05)");
            surfGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
            ctx.fillStyle = surfGrad;
            ctx.fillRect(0, GROUND_Y, W, CANVAS_HEIGHT - GROUND_Y);

            if (!g.started) {
                // ── start screen ─────────────────────────────
                drawAstronaut(ctx, W / 2 - 11, GROUND_Y - PLAYER_H, g.frame, false);

                ctx.fillStyle = "#0096FF";
                ctx.font = "bold 16px 'Plus Jakarta Sans', sans-serif";
                ctx.textAlign = "center";
                ctx.fillText("SPACE RUNNER", W / 2, 45);

                ctx.fillStyle = "rgba(255,255,255,0.5)";
                ctx.font = "12px 'Plus Jakarta Sans', sans-serif";
                ctx.fillText(
                    "Press SPACE / Click / Tap to Start",
                    W / 2,
                    68
                );

                if (g.highScore > 0) {
                    ctx.fillStyle = "rgba(255, 215, 0, 0.6)";
                    ctx.font = "11px 'Plus Jakarta Sans', sans-serif";
                    ctx.fillText(`HI ${g.highScore}`, W / 2, 88);
                }

                animRef.current = requestAnimationFrame(loop);
                return;
            }

            if (g.running) {
                // ── update player ────────────────────────────
                g.playerVY += GRAVITY;
                g.playerY += g.playerVY;
                if (g.playerY >= GROUND_Y - PLAYER_H) {
                    g.playerY = GROUND_Y - PLAYER_H;
                    g.playerVY = 0;
                    g.isJumping = false;
                }

                // ── update speed (very gradual) ──────────────
                if (g.speed < MAX_SPEED) {
                    g.speed += SPEED_INCREMENT;
                }

                // ── spawn dust when running on ground ────────
                if (!g.isJumping && g.frame % 3 === 0) {
                    spawnDust(g.dust, 55, GROUND_Y - 2);
                }

                // ── spawn obstacles (progressive difficulty) ─
                const displayScore = Math.floor(g.score / 10);

                // Gap decreases as score increases (wider gap = easier)
                const progressFactor = Math.min(displayScore / 2000, 1); // 0 → 1 over 2000 score
                const currentMinGap = MIN_OBSTACLE_GAP - progressFactor * 60; // 160 → 100
                const currentMaxGap = MAX_OBSTACLE_GAP - progressFactor * 120; // 300 → 180

                g.nextObstacle -= g.speed;
                if (g.nextObstacle <= 0) {
                    const roll = Math.random();

                    // Determine obstacle type based on score
                    if (displayScore >= 500 && roll > 0.75) {
                        // Flaming meteor (unlocks at score 500)
                        const flyY = GROUND_Y - 45 - Math.random() * 35;
                        g.obstacles.push({
                            type: "meteor",
                            x: W + 30,
                            y: flyY,
                            size: 10 + Math.random() * 6,
                            hit: false,
                        });
                    } else if (displayScore >= 100 && roll > 0.6) {
                        // UFO (unlocks at score 100)
                        const flyY = GROUND_Y - 50 - Math.random() * 25;
                        g.obstacles.push({
                            type: "alien",
                            x: W + 20,
                            y: flyY,
                            size: 14 + Math.random() * 6,
                            hit: false,
                        });
                    } else {
                        // Asteroid on ground (always available)
                        const size = 10 + Math.random() * 10;
                        g.obstacles.push({
                            type: "asteroid",
                            x: W + 20,
                            y: GROUND_Y - size,
                            size,
                            hit: false,
                        });
                    }
                    g.nextObstacle =
                        currentMinGap +
                        Math.random() * (currentMaxGap - currentMinGap);
                }

                // ── update obstacles ─────────────────────────
                for (let i = g.obstacles.length - 1; i >= 0; i--) {
                    const o = g.obstacles[i];
                    o.x -= g.speed;
                    if (o.x < -40) {
                        g.obstacles.splice(i, 1);
                        continue;
                    }

                    // collision (simple box)
                    const playerBox = {
                        x: 58,
                        y: g.playerY + 4,
                        w: 18,
                        h: 28,
                    };
                    let oBox;
                    if (o.type === "asteroid") {
                        oBox = {
                            x: o.x - o.size * 0.8,
                            y: o.y - o.size * 0.8,
                            w: o.size * 1.6,
                            h: o.size * 1.6,
                        };
                    } else if (o.type === "meteor") {
                        oBox = {
                            x: o.x - o.size * 0.9,
                            y: o.y - o.size * 0.9,
                            w: o.size * 1.8,
                            h: o.size * 1.8,
                        };
                    } else {
                        oBox = {
                            x: o.x - o.size * 1.1,
                            y: o.y - o.size * 0.5,
                            w: o.size * 2.2,
                            h: o.size,
                        };
                    }

                    if (
                        playerBox.x < oBox.x + oBox.w &&
                        playerBox.x + playerBox.w > oBox.x &&
                        playerBox.y < oBox.y + oBox.h &&
                        playerBox.y + playerBox.h > oBox.y
                    ) {
                        // hit!
                        g.running = false;
                        g.gameOver = true;
                        g.particles = createExplosion(
                            playerBox.x + 9,
                            playerBox.y + 14
                        );
                        if (g.score > g.highScore) {
                            g.highScore = g.score;
                            localStorage.setItem(
                                "spaceRunnerHighScore",
                                g.highScore.toString()
                            );
                        }
                        forceUpdate((n) => n + 1);
                    }
                }

                // ── score ────────────────────────────────────
                g.score++;
            }

            // ── draw dust trail ──────────────────────────────
            for (let i = g.dust.length - 1; i >= 0; i--) {
                const d = g.dust[i];
                d.x += d.vx;
                d.y += d.vy;
                d.life -= 0.04;
                if (d.life <= 0) {
                    g.dust.splice(i, 1);
                    continue;
                }
                ctx.globalAlpha = d.life * 0.4;
                ctx.fillStyle = "#8899AA";
                ctx.beginPath();
                ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1;
            }

            // ── draw astronaut ───────────────────────────────
            if (!g.gameOver) {
                drawAstronaut(ctx, 55, g.playerY, g.frame, g.running && !g.isJumping);
            }

            // ── draw obstacles ───────────────────────────────
            g.obstacles.forEach((o) => {
                if (o.type === "asteroid") {
                    drawAsteroid(ctx, o.x, o.y, o.size);
                } else if (o.type === "meteor") {
                    drawMeteor(ctx, o.x, o.y, o.size, g.frame);
                } else {
                    drawAlien(ctx, o.x, o.y, o.size, g.frame);
                }
            });

            // ── draw particles ───────────────────────────────
            for (let i = g.particles.length - 1; i >= 0; i--) {
                const p = g.particles[i];
                p.x += p.vx;
                p.y += p.vy;
                p.life -= 0.02;
                if (p.life <= 0) {
                    g.particles.splice(i, 1);
                    continue;
                }
                ctx.globalAlpha = p.life;
                ctx.fillStyle = p.color;
                ctx.fillRect(p.x, p.y, p.size, p.size);
                ctx.globalAlpha = 1;
            }

            // ── HUD ──────────────────────────────────────────
            ctx.fillStyle = "rgba(255,255,255,0.7)";
            ctx.font = "bold 13px 'Plus Jakarta Sans', monospace";
            ctx.textAlign = "right";
            ctx.fillText(
                `${Math.floor(g.score / 10)
                    .toString()
                    .padStart(5, "0")}`,
                W - 16,
                24
            );

            if (g.highScore > 0) {
                ctx.fillStyle = "rgba(255, 215, 0, 0.5)";
                ctx.font = "11px 'Plus Jakarta Sans', monospace";
                ctx.fillText(`HI ${g.highScore}`, W - 80, 24);
            }

            // speed indicator (subtle)
            ctx.fillStyle = "rgba(0, 150, 255, 0.3)";
            ctx.font = "10px 'Plus Jakarta Sans', monospace";
            ctx.textAlign = "left";
            ctx.fillText(`SPD ${g.speed.toFixed(1)}`, 16, 24);

            // ── game over overlay ────────────────────────────
            if (g.gameOver) {
                ctx.fillStyle = "rgba(10, 14, 18, 0.55)";
                ctx.fillRect(0, 0, W, CANVAS_HEIGHT);

                ctx.fillStyle = "#FF4040";
                ctx.font = "bold 18px 'Plus Jakarta Sans', sans-serif";
                ctx.textAlign = "center";
                ctx.fillText("GAME OVER", W / 2, 60);

                ctx.fillStyle = "rgba(255,255,255,0.6)";
                ctx.font = "12px 'Plus Jakarta Sans', sans-serif";
                ctx.fillText(
                    `Score: ${Math.floor(g.score / 10)}`,
                    W / 2,
                    85
                );

                ctx.fillStyle = "rgba(255,255,255,0.4)";
                ctx.font = "11px 'Plus Jakarta Sans', sans-serif";
                ctx.fillText("Press SPACE / Click to Restart", W / 2, 110);
            }

            animRef.current = requestAnimationFrame(loop);
        };

        animRef.current = requestAnimationFrame(loop);
        return () => {
            if (animRef.current) cancelAnimationFrame(animRef.current);
        };
    }, []);

    return (
        <section className="w-full py-16 px-4 md:px-6">
            <div className="container mx-auto">
                {/* Title area */}
                <div className="text-center mb-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-primary/70 font-medium mb-1">
                        🚀 Mini Game
                    </p>
                    <h2 className="text-xl font-bold text-foreground/90">
                        Space Runner
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                        Press <kbd className="px-1.5 py-0.5 rounded bg-muted text-xs font-mono">Space</kbd> or click to play
                    </p>
                </div>

                {/* Game canvas container */}
                <div
                    className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden border border-border/50 cursor-pointer"
                    style={{
                        boxShadow:
                            "0 0 40px rgba(0, 150, 255, 0.08), inset 0 0 30px rgba(0,0,0,0.3)",
                    }}
                    onClick={jump}
                    onTouchStart={(e) => {
                        e.preventDefault();
                        jump();
                    }}
                >
                    <canvas
                        ref={canvasRef}
                        className="block w-full"
                        style={{ height: `${CANVAS_HEIGHT}px` }}
                    />
                </div>
            </div>
        </section>
    );
};
