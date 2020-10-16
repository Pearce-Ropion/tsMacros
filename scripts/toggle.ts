if (globalvars.getBoolean("active")) {
    keybind.key("key.mouse.left", false);
    globalvars.putBoolean("active", false);
    chat.log("off")
} else {
    keybind.key("key.mouse.left", true);
    globalvars.putBoolean("active", true);
    chat.log("on")
}
