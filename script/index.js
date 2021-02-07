$(document).ready(function() {

    let idVal = 1;
    let containeridVal = 1;

    taskTextStatus = () => {
        if(($(".toDoItem").length) == 1){
            $("#taskText").text("Task");
        } else {
            $("#taskText").text("Tasks");
        }
    };

    $('#add').on('click', () => {
        let toDoItem = $("#toDo").val();

        if($("#toDo").val().trim() == ''){
            alert("Task cannot be empty!");
        } else { 
            $("#toDoListSpace").append("<div class='container toDoItem' id='"+containeridVal+"'><input type='checkbox' id='"+idVal+"'><h4>"+toDoItem+"</h4></div>");
            $("#taskNumber").text($(".toDoItem").length);
            taskTextStatus();
            idVal++;
            containeridVal++;
        }

        $("#toDo").val("");
    });

    
    $(document).on('change', ':checkbox', (event) => {
        console.log($(event.currentTarget).attr('id'));
        if($(event.currentTarget.checked)){
            $(event.currentTarget).parent().addClass('done');
        } else {
            $(event.currentTarget).parent().removeClass('done');
        }
    });

});