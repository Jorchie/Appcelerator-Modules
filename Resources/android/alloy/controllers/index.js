function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function tfBlur(e) {
        deselected = selected;
        $.removeClass($[deselected], "blueBorder");
        $.addClass($[deselected], "tfView");
    }
    function tfFocus(e) {
        selected = this.name;
        $.removeClass($[selected], "tfView");
        $.addClass($[selected], "blueBorder");
    }
    require("/alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        color: "gray",
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.nombre = Ti.UI.createTextField({
        width: "90%",
        color: "gray",
        hintTextColor: "gray",
        backgroundColor: "transparent",
        right: "15",
        id: "nombre",
        name: "name",
        hintText: "Nombre"
    });
    $.__views.index.add($.__views.nombre);
    tfFocus ? $.addListener($.__views.nombre, "focus", tfFocus) : __defers["$.__views.nombre!focus!tfFocus"] = true;
    tfBlur ? $.addListener($.__views.nombre, "blur", tfBlur) : __defers["$.__views.nombre!blur!tfBlur"] = true;
    $.__views.name = Ti.UI.createView({
        border: "50",
        borderColor: "gray",
        backgroundColor: "gray",
        width: "90%",
        height: "2",
        id: "name"
    });
    $.__views.index.add($.__views.name);
    $.__views.apellido = Ti.UI.createTextField({
        width: "90%",
        color: "gray",
        hintTextColor: "gray",
        backgroundColor: "transparent",
        right: "15",
        id: "apellido",
        hintText: "Apellido",
        name: "lname"
    });
    $.__views.index.add($.__views.apellido);
    tfFocus ? $.addListener($.__views.apellido, "focus", tfFocus) : __defers["$.__views.apellido!focus!tfFocus"] = true;
    tfBlur ? $.addListener($.__views.apellido, "blur", tfBlur) : __defers["$.__views.apellido!blur!tfBlur"] = true;
    $.__views.lname = Ti.UI.createView({
        border: "50",
        borderColor: "gray",
        backgroundColor: "gray",
        width: "90%",
        height: "2",
        id: "lname"
    });
    $.__views.index.add($.__views.lname);
    $.__views.correo = Ti.UI.createTextField({
        width: "90%",
        color: "gray",
        hintTextColor: "gray",
        backgroundColor: "transparent",
        right: "15",
        id: "correo",
        hintText: "Correo",
        name: "mail"
    });
    $.__views.index.add($.__views.correo);
    tfFocus ? $.addListener($.__views.correo, "focus", tfFocus) : __defers["$.__views.correo!focus!tfFocus"] = true;
    tfBlur ? $.addListener($.__views.correo, "blur", tfBlur) : __defers["$.__views.correo!blur!tfBlur"] = true;
    $.__views.mail = Ti.UI.createView({
        border: "50",
        borderColor: "gray",
        backgroundColor: "gray",
        width: "90%",
        height: "2",
        id: "mail"
    });
    $.__views.index.add($.__views.mail);
    $.__views.password = Ti.UI.createTextField({
        width: "90%",
        color: "gray",
        hintTextColor: "gray",
        backgroundColor: "transparent",
        right: "15",
        id: "password",
        hintText: "Password",
        name: "pword"
    });
    $.__views.index.add($.__views.password);
    tfFocus ? $.addListener($.__views.password, "focus", tfFocus) : __defers["$.__views.password!focus!tfFocus"] = true;
    tfBlur ? $.addListener($.__views.password, "blur", tfBlur) : __defers["$.__views.password!blur!tfBlur"] = true;
    $.__views.pword = Ti.UI.createView({
        border: "50",
        borderColor: "gray",
        backgroundColor: "gray",
        width: "90%",
        height: "2",
        id: "pword"
    });
    $.__views.index.add($.__views.pword);
    $.__views.password2 = Ti.UI.createTextField({
        width: "90%",
        color: "gray",
        hintTextColor: "gray",
        backgroundColor: "transparent",
        right: "15",
        id: "password2",
        hintText: "Confirmar Correo",
        name: "pwordConfirm"
    });
    $.__views.index.add($.__views.password2);
    tfFocus ? $.addListener($.__views.password2, "focus", tfFocus) : __defers["$.__views.password2!focus!tfFocus"] = true;
    tfBlur ? $.addListener($.__views.password2, "blur", tfBlur) : __defers["$.__views.password2!blur!tfBlur"] = true;
    $.__views.pwordConfirm = Ti.UI.createView({
        border: "50",
        borderColor: "gray",
        backgroundColor: "gray",
        width: "90%",
        height: "2",
        id: "pwordConfirm"
    });
    $.__views.index.add($.__views.pwordConfirm);
    $.__views.__alloyId0 = Ti.UI.createButton({
        title: "ENVIAR",
        id: "__alloyId0"
    });
    $.__views.index.add($.__views.__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var selected;
    var deselected;
    $.index.open();
    __defers["$.__views.nombre!focus!tfFocus"] && $.addListener($.__views.nombre, "focus", tfFocus);
    __defers["$.__views.nombre!blur!tfBlur"] && $.addListener($.__views.nombre, "blur", tfBlur);
    __defers["$.__views.apellido!focus!tfFocus"] && $.addListener($.__views.apellido, "focus", tfFocus);
    __defers["$.__views.apellido!blur!tfBlur"] && $.addListener($.__views.apellido, "blur", tfBlur);
    __defers["$.__views.correo!focus!tfFocus"] && $.addListener($.__views.correo, "focus", tfFocus);
    __defers["$.__views.correo!blur!tfBlur"] && $.addListener($.__views.correo, "blur", tfBlur);
    __defers["$.__views.password!focus!tfFocus"] && $.addListener($.__views.password, "focus", tfFocus);
    __defers["$.__views.password!blur!tfBlur"] && $.addListener($.__views.password, "blur", tfBlur);
    __defers["$.__views.password2!focus!tfFocus"] && $.addListener($.__views.password2, "focus", tfFocus);
    __defers["$.__views.password2!blur!tfBlur"] && $.addListener($.__views.password2, "blur", tfBlur);
    _.extend($, exports);
}

var Alloy = require("/alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;