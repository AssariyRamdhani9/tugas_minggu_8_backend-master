const express = require("express")
const testRoutes = require("./test_routes")
const bookRoutes = require("./books");
const authorsRoutes = require("./authors");
const categoriesRoutes = require("./categories");
const borrowersRoutes = require("./borrowers");
const borrowRoutes = require("./borrowRoutes");

const routes = express.Router()

// kumpulkan semua routes disini per bagian ex : /author,/books dll
routes.use(bookRoutes);
routes.use(authorsRoutes);
routes.use(categoriesRoutes);
routes.use(borrowersRoutes);
routes.use(borrowRoutes);

routes.use(testRoutes)

module.exports = routes