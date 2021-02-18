$(document).ready(function() {

    let idVal = 1;
    let containeridVal = 1;

    taskTextStatus = () => {

        if(($(".toDoItem").length - $(".done").length) == 1){
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
            $("#toDoListSpace").append("<div class='container toDoItem' id='"+containeridVal+"'><div class='row'><div class='col-6'><input type='checkbox' id='"+idVal+"'><h4>"+toDoItem+"</h4></div><div class='col-6 toDoItemRight'><input type='image' src='images/trash.png' class='delButton'></div></div></div>");
            $("#taskNumber").text($(".toDoItem").length - $(".done").length);
            taskTextStatus();
            idVal++;
            containeridVal++;
        }

        $("#toDo").val("");
    });

    $(document).on('click', '.delButton', (event) => {
        $(event.currentTarget).parent().parent().parent().remove();
        $("#taskNumber").text($(".toDoItem").length - $(".done").length);
        taskTextStatus();
    });

    
    $(document).on('click', ':checkbox', (event) => {
        
        if(event.currentTarget.checked){
            $(event.currentTarget).parent().addClass('done');          
        } else {
            $(event.currentTarget).parent().removeClass('done');
        }

        $("#taskNumber").text($(".toDoItem").length - $(".done").length);
        taskTextStatus();
        
    });

    allOnClick  = () => {
        $(".toDoItem").show();
        $("#allCol4").addClass('selected');
        $("#incompleteCol4").removeClass('selected');
        $("#completeCol4").removeClass('selected');
    }

    incompleteOnClick  = () => {
        $(".toDoItem:not(.done)").show();
        $(".done").parent().parent().hide();
        $("#incompleteCol4").addClass('selected');
        $("#completeCol4").removeClass('selected');
        $("#allCol4").removeClass('selected');
    }

    completeOnClick  = () => {
        $(".toDoItem:not(.done)").hide();
        $(".done").parent().parent().show();
        $("#completeCol4").addClass('selected');
        $("#allCol4").removeClass('selected');
        $("#incompleteCol4").removeClass('selected');
    }
    
});