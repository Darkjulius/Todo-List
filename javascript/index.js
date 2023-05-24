window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");

  // console.log(form, input, list_el);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = input.value;
    // console.log(task);

    // Si l'utilisateur ne saisi rien alors alert().
    if (!task) {
      alert("Veuillez-saisir une tâche!");
      return;
    }

    // Création de l'élément enfant qui aura pour parent #tasks soit la constante list_el
    const task_el = document.createElement("div");
    task_el.classList.add("task");

    // Création de l'élément enfant qui aura pour parent .task soit la constante task_el
    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");

    task_content_el.appendChild(task_input_el);

    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");

    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML = "Modifier";

    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerHTML = "Supprimer";

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

    input.value = "";

    // Au clic sur le bouton modifier, je supprime la lecture seule et je donne la possibilité de modifier le contenu de la tâche et je modifier le nom du bouton en Sauvegarde afin que la modification soit prise en compte sinon rien ne change.
    task_edit_el.addEventListener("click", () => {
      if (task_edit_el.innerText.toLowerCase() == "modifier") {
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
        task_edit_el.innerText = "Sauvegarder";
      } else {
        task_input_el.setAttribute("readonly", "readonly");
        task_edit_el.innerText = "Modifier";
      }
    });

    // Je supprime la tâche.
    task_delete_el.addEventListener("click", () => {
      list_el.removeChild(task_el);
    });
  });
});
