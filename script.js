let moveCount = 0;
        let startTime = Date.now();
        let timerInterval;

        function updateStats() {
            document.getElementById('moveCount').textContent = moveCount;
        }

        function updateTimer() {
            let elapsed = Math.floor((Date.now() - startTime) / 1000);
            let minutes = Math.floor(elapsed / 60);
            let seconds = elapsed % 60;
            let timeStr = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
            document.getElementById('timer').textContent = timeStr;
        }

        function move1() {
            let b1 = document.getElementById("b1");
            if (document.getElementById("b2").textContent === "") {
                swapButtons(b1, document.getElementById("b2"));
            } else if (document.getElementById("b4").textContent === "") {
                swapButtons(b1, document.getElementById("b4"));
            }
        }

        function move2() {
            let b2 = document.getElementById("b2");
            if (document.getElementById("b1").textContent === "") {
                swapButtons(b2, document.getElementById("b1"));
            } else if (document.getElementById("b3").textContent === "") {
                swapButtons(b2, document.getElementById("b3"));
            } else if (document.getElementById("b5").textContent === "") {
                swapButtons(b2, document.getElementById("b5"));
            }
        }

        function move3() {
            let b3 = document.getElementById("b3");
            if (document.getElementById("b2").textContent === "") {
                swapButtons(b3, document.getElementById("b2"));
            } else if (document.getElementById("b6").textContent === "") {
                swapButtons(b3, document.getElementById("b6"));
            }
        }

        function move4() {
            let b4 = document.getElementById("b4");
            if (document.getElementById("b1").textContent === "") {
                swapButtons(b4, document.getElementById("b1"));
            } else if (document.getElementById("b5").textContent === "") {
                swapButtons(b4, document.getElementById("b5"));
            } else if (document.getElementById("b7").textContent === "") {
                swapButtons(b4, document.getElementById("b7"));
            }
        }

        function move5() {
            let b5 = document.getElementById("b5");
            if (document.getElementById("b2").textContent === "") {
                swapButtons(b5, document.getElementById("b2"));
            } else if (document.getElementById("b4").textContent === "") {
                swapButtons(b5, document.getElementById("b4"));
            } else if (document.getElementById("b6").textContent === "") {
                swapButtons(b5, document.getElementById("b6"));
            } else if (document.getElementById("b8").textContent === "") {
                swapButtons(b5, document.getElementById("b8"));
            }
        }

        function move6() {
            let b6 = document.getElementById("b6");
            if (document.getElementById("b3").textContent === "") {
                swapButtons(b6, document.getElementById("b3"));
            } else if (document.getElementById("b5").textContent === "") {
                swapButtons(b6, document.getElementById("b5"));
            } else if (document.getElementById("b9").textContent === "") {
                swapButtons(b6, document.getElementById("b9"));
            }
        }

        function move7() {
            let b7 = document.getElementById("b7");
            if (document.getElementById("b4").textContent === "") {
                swapButtons(b7, document.getElementById("b4"));
            } else if (document.getElementById("b8").textContent === "") {
                swapButtons(b7, document.getElementById("b8"));
            }
        }

        function move8() {
            let b8 = document.getElementById("b8");
            if (document.getElementById("b7").textContent === "") {
                swapButtons(b8, document.getElementById("b7"));
            } else if (document.getElementById("b5").textContent === "") {
                swapButtons(b8, document.getElementById("b5"));
            } else if (document.getElementById("b9").textContent === "") {
                swapButtons(b8, document.getElementById("b9"));
            }
        }

        function move9() {
            let b9 = document.getElementById("b9");
            if (document.getElementById("b6").textContent === "") {
                swapButtons(b9, document.getElementById("b6"));
            } else if (document.getElementById("b8").textContent === "") {
                swapButtons(b9, document.getElementById("b8"));
            }
            checkWin();
        }

        function swapButtons(btn1, btn2) {
            const tempText = btn1.textContent;
            const tempClass = btn1.className;
            
            btn1.textContent = btn2.textContent;
            btn1.className = btn2.className;
            
            btn2.textContent = tempText;
            btn2.className = tempClass;
            
            moveCount++;
            updateStats();
        }

        function shufflePuzzle() {
            let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", ""];
            
            // Simple shuffle
            for (let i = numbers.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                let temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
            
            // Put numbers in buttons
            for (let i = 1; i <= 9; i++) {
                let btn = document.getElementById("b" + i);
                btn.textContent = numbers[i - 1];
                if (numbers[i - 1] === "") {
                    btn.className = "puzzle-btn empty";
                } else {
                    btn.className = "puzzle-btn";
                }
            }
            
            moveCount = 0;
            startTime = Date.now();
            updateStats();
        }

        function resetPuzzle() {
            let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", ""];
            for (let i = 1; i <= 9; i++) {
                let btn = document.getElementById("b" + i);
                btn.textContent = numbers[i - 1];
                if (numbers[i - 1] === "") {
                    btn.className = "puzzle-btn empty";
                } else {
                    btn.className = "puzzle-btn";
                }
            }
            
            moveCount = 0;
            startTime = Date.now();
            updateStats();
        }

        function checkWin() {
            let correctOrder = ["1", "2", "3", "4", "5", "6", "7", "8", ""];
            let isWin = true;
            
            for (let i = 1; i <= 9; i++) {
                let btn = document.getElementById("b" + i);
                if (btn.textContent !== correctOrder[i - 1]) {
                    isWin = false;
                    break;
                }
            }
            
            if (isWin) {
                let elapsed = Math.floor((Date.now() - startTime) / 1000);
                let minutes = Math.floor(elapsed / 60);
                let seconds = elapsed % 60;
                
                alert("You win! Moves: " + moveCount + " Time: " + minutes + ":" + (seconds < 10 ? "0" : "") + seconds);
            }
        }

        // Initialize game
        window.onload = () => {
            shufflePuzzle();
            timerInterval = setInterval(updateTimer, 1000);
        };