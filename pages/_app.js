import { Provider } from "react-redux";
import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { wrapper } from "../redux/store";
// import Swal from "sweetalert2";
function MyApp({ Component, pageProps }) {
  return (
    // <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    // </Provider>
  );
}
export default wrapper.withRedux(MyApp);
