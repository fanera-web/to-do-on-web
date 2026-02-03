const createBtn = document.querySelector("#createBtn");
const typeChose = document.querySelector("#typeChose");
const taskContainer = document.querySelector("#taskContainer");
const themeBtn = document.querySelector("#themeBtn");

const globalOl = document.createElement("ol");
const globalUl = document.createElement("ul");

taskContainer.appendChild(globalOl);
taskContainer.appendChild(globalUl);

themeBtn.addEventListener("click", () => {
document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "Light";
    } else {
        themeBtn.textContent = "Dark";
    }
});

createBtn.addEventListener("click", () => {
    let wrapper = document.createElement("div");
    wrapper.classList.add("task");

    let content;
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");

    switch (typeChose.value) {
        case "ol":
            content = document.createElement("li");
            content.textContent = "New task";
            content.contentEditable = "true";
            deleteBtn.addEventListener("click", () => wrapper.remove());
            wrapper.appendChild(content);
            wrapper.appendChild(deleteBtn);
            globalOl.appendChild(wrapper);
            break;

        case "ul":
            content = document.createElement("li");
            content.textContent = "New task";
            content.contentEditable = "true";
            deleteBtn.addEventListener("click", () => wrapper.remove());
            wrapper.appendChild(content);
            wrapper.appendChild(deleteBtn);
            globalUl.appendChild(wrapper);
            break;

        case "text":
            content = document.createElement("p");
            content.textContent = "New task";
            content.contentEditable = "true";
            deleteBtn.addEventListener("click", () => wrapper.remove());
            wrapper.appendChild(content);
            wrapper.appendChild(deleteBtn);
            taskContainer.appendChild(wrapper);
            break;
    }
});
