app.get("users/register", userRoutes.showRegistrationForm);
app.post("users/register", userRoutes.createUser);

app.get("/users/");
