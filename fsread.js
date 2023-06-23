const fs = require("fs");

let fun = () => {
    try {
        async function loadMonoCounter() {
            
            const data = await fs.readFile("ai_tool_master.md", "buffer", (err, dt) => {
                console.log(dt);
                
            });
            return Buffer.from(data);
        }
        loadMonoCounter();
    } catch (error) {
        console.log(error);
    }
};

fun();

