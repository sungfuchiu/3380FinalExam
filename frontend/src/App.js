import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BookList from "./FrontPage_BookList";
import CreateBook from "./Create-Book";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <BookList />,
      },
      {
        path: "/create-book",
        element: <CreateBook />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
  // return <BookList />;
}

export default App;