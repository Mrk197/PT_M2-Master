let url = 'http://localhost:5000/amigos';

$('#imgAmigos').hide();

const getAmigos = () => {
    $('#imgAmigos').show();
    let list = $('#lista');
    list.empty();
    $.get(`${url}`, (data) =>{
        for (const datos of data){
            list.append(`<li>${datos.name}</li>`);
        } 
        $('#imgAmigos').hide(); 
    });
};

const cleanInputs = () => {
    $('#input').val(" ");
    $('#inputDelete').val(" ");
};

$('#boton').click(() => getAmigos());

$('#search').click(
    () => {
        $('#amigo').empty();
        let busqueda = $('#input').val();
        let amigo = $('#amigo');
        if(!busqueda) return amigo.text("ingresa un ID");
        $.get(`${url}/${busqueda}`,
        (data) =>{
            if (data.name) {
                amigo.append(data.name); 
            }
            else{
                amigo.append("No tienes tantos amigos");
            }    
        });
        cleanInputs();
    }
);

$('#delete').click(
    () => {
        $("#success").empty();
        let deleteID = $('#inputDelete').val();
        $.ajax({
            url:'http://localhost:5000/amigos/'+deleteID,
            type: 'delete',
            success:(data) => {
                $("#success").text(`Tu amigo ${deleteID} fue borrado con éxito`);
                getAmigos();
                cleanInputs();
            }
        });
    }
)