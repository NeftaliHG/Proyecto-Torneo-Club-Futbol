$(document).ready(function(){
    
    $(".editPlayer").click(function(){
        jugador = $(this).attr("data-name");
        $('#modalActualizar').modal({
          keyboard: true
        })
    });
    
    $(".registrarJugador").click(function(){
        jugador = $(this).attr("data-name");
        $('#modalRegistrar').modal({
          keyboard: true
        })
    });
    
    $(".registrarEquipo").click(function(){
        jugador = $(this).attr("data-name");
        $('#modalRegistrarEquipo').modal({
          keyboard: true
        })
    });
	   $(".verPlantilla").click(function(){
        equipo = $(this).attr("data-name");
        $('#modalVerP').modal({
          keyboard: true
        })
    });
    
    $(".deletePlayer").click(function(){
        jugador = $(this).attr("data-name");
        var lobibox = Lobibox.confirm({
            msg: "Est&aacute;s seguro que quieres eliminar al jugador " + jugador,
            title: "Confirmaci&oacute;n",
            buttons: {
                yes: {
                    'class': 'btn btn-success',
                    text: "Si",
                    closeOnClick: true
                },
                cancel: {
                    'class': 'btn btn-danger',
                    text: 'Cancelar',
                    closeOnClick: true
                }
            },
            callback: function(lobibox, type){
                if(type == 'yes'){
                    Lobibox.notify("success",{
                        title:"Jugador eliminado",
                        msg:"Se elimino a " + jugador + ' correctamente',
                        position:"bottom right",
                        delay:5000,
                        width:400,
                        iconSource:"fontAwesome"
                    });
                }
            },
        });
    });
    
    /*$('#actualizarJugador').click(function(){
        $('#myModal').modal('hide');
        Lobibox.notify("success",{
            title:"Jugador actualizado",
            msg:"Se actualizo la informacion del jugador correctamente",
            position:"bottom right",
            delay:5000,
            width:400,
            iconSource:"fontAwesome"
        });
    });*/
    
    $.validate({
		form:"#formularioActualizarJugador",
		lang:"es",
        modules : 'file',
		onSuccess: function(){
            var lobibox = Lobibox.confirm({
                msg: "Est&aacute;s seguro que desea actualizar la informaci&oacute;n",
                title: "Confirmaci&oacute;n",
                buttons: {
                    yes: {
                        'class': 'btn btn-success',
                        text: "Si",
                        closeOnClick: true
                    },
                    cancel: {
                        'class': 'btn btn-danger',
                        text: 'Cancelar',
                        closeOnClick: true
                    }
                },
                callback: function(lobibox, type){
                if(type == 'yes'){
                    alert('ok');
                    $.ajax({
                        method:"post",
                        url:"ControladorActualizarJugador",
                        data:"nombre=edgar&correo=hola@hola.com&telefono=7731256415",
                        success: function(resp){
                            alert(resp);
                        }
                    });
                    /*Lobibox.notify("success",{
                        title:"Jugador actualizado",
                        msg:"Se actualizo la informaci&oacute;n correctamente",
                        position:"bottom right",
                        delay:4000,
                        width:400,
                        iconSource:"fontAwesome"
                    });*/
                }
            },
            });
            return false;
        }
	});
    
    $.validate({
		form:"#formularioRegistrarJugador",
		lang:"es",
        modules : 'file',
		onSuccess: function(){
            var lobibox = Lobibox.confirm({
                msg: "Est&aacute;s seguro que quires registrar al jugador ",
                title: "Confirmaci&oacute;n",
                buttons: {
                    yes: {
                        'class': 'btn btn-success',
                        text: "Si",
                        closeOnClick: true
                    },
                    cancel: {
                        'class': 'btn btn-danger',
                        text: 'Cancelar',
                        closeOnClick: true
                    }
                },
                callback: function(lobibox, type){
                if(type == 'yes'){
                    $.ajax({
                        method:"post",
                        url:"ControladorRegistrarJugador",
                        data:"nombre=edgar&correo=hola@hola.com&telefono=7731256415",
                        success: function(resp){
                            alert(resp);
                        }
                    });
                    Lobibox.notify("success",{
                        title:"Jugador actualizado",
                        msg:"Se registr&oacute; al jugador correctamente",
                        position:"bottom right",
                        delay:4000,
                        width:400,
                        iconSource:"fontAwesome"
                    });
                }
            },
            });
            return false;
        }
	});
    
    $.validate({
		form:"#formularioRegistrarEquipo",
		lang:"es",
        modules : 'file',
		onSuccess: function(){
            var lobibox = Lobibox.confirm({
                msg: "Est&aacute;s seguro que quires registrar este equipo",
                title: "Confirmaci&oacute;n",
                buttons: {
                    yes: {
                        'class': 'btn btn-success',
                        text: "Si",
                        closeOnClick: true
                    },
                    cancel: {
                        'class': 'btn btn-danger',
                        text: 'Cancelar',
                        closeOnClick: true
                    }
                },
                callback: function(lobibox, type){
                if(type == 'yes'){
                    $.ajax({
                        method:"post",
                        url:"ControladorRegistrarJugador",
                        data:"nombre=edgar&correo=hola@hola.com&telefono=7731256415",
                        success: function(resp){
                            alert(resp);
                        }
                    });
                    Lobibox.notify("success",{
                        title:"Equipo registrado",
                        msg:"Se registr&oacute; al equipo correctamente",
                        position:"bottom right",
                        delay:4000,
                        width:400,
                        iconSource:"fontAwesome"
                    });
                }
            },
            });
            return false;
        }
	});
    
});

