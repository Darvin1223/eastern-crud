const controllers = {};


controllers.list = function(req, res){
    req.getConnection(function(error, connection){
        connection.query('SELECT * FROM producto', function(error, productos){
            if(error){
                res.json(error);
            }
            res.render('productos', {
                data: productos
            });
        });
    });

};

controllers.save = function(req, res){
    const data = req.body;

    req.getConnection(function(error, connection){
        connection.query('INSERT INTO producto SET ?', [data], function(error, producto){
            res.redirect('/');
        });
    });
};

controllers.edit = function(req, res){
    const { id }  = req.params;
    req.getConnection(function(error, connection){
        connection.query('SELECT * FROM producto WHERE id = ? ', [id], function(error, producto){
            res.render('../views/productos_edit_', {
                data: producto[0]
            });
        });
    });
};

controllers.update = function(req, res){
    const { id }  = req.params;
    const nuevoProducto = req.body;
    req.getConnection(function(error, connection){
        connection.query('UPDATE producto SET ? WHERE ID =?', [nuevoProducto, id], function(error, producto){
            res.redirect('/');
        });
    });
};
controllers.delete = function(req, res){
    const { id }  = req.params;
    req.getConnection(function(error, connection){
        connection.query('DELETE FROM producto WHERE id = ?',[id], function(error, producto){
            res.redirect('/');
        });
    });
};

//Exportamos el controlador

module.exports = controllers;