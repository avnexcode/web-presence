import logoImage from "@/assets/image/logo.png"
export default function ApplicationLogo(props) {
    return (
        <>
            <img src={logoImage} {...props} alt="" />
        </>
    );
}
