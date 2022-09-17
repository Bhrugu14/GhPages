import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import { RippleButton } from "../component";

export default function Home() {
  const router = useRouter();
  return (
    <div className="wrapper">
      <p>Ripple Buttons with Toast</p>
      <section
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          height: "40%",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        <RippleButton
          style={{ backgroundColor: "grey" }}
          onClickButton={() => toast.info("Information Toast!")}
          title={"info"}
        />
        <RippleButton
          style={{ backgroundColor: "rgb(21, 160, 3" }}
          onClickButton={() => toast.success("Success Toast!")}
          title={"success"}
        />
        <RippleButton
          style={{ backgroundColor: "red" }}
          onClickButton={() => toast.error("Warning Toast!")}
          title={"error"}
        />
        <RippleButton
          style={{ backgroundColor: "rgb(131, 129, 2)" }}
          onClickButton={() => toast.warning("Warning Toast!")}
          title={"warning"}
        />
      </section>
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          height: "40%",
          width: "100%",
        }}
      >
        <RippleButton
          style={{ alignSelf: "center" }}
          onClickButton={() => router.push("/multiCarousel")}
          title={"Next Page"}
        />
      </section>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />
    </div>
  );
}
