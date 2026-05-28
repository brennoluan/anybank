import { toast } from "react-toastify";
import { List, ListItem } from "./styles";
import { useNavigate } from "react-router";
import { IconAvatar } from "../../components/Icons";
import { TransparentButton } from "../../components/TransparentButton";
import { useAuthContext } from "../../app/hooks/useAuthContext";

export const AuthenticatedActionList = () => {
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  const onAskForLogout = async () => {
    console.log("logout");
    try {
      await logout();
      toast.success("Logout efetuado com sucesso!");
      navigate("/auth/login");
    } catch (error) {
      console.error("Error logging out:", error);
      toast.error("Falha ao efetuar logout, tente novamente!");
    }
  };

  return (
    <List>
      <ListItem>Boas Vindas</ListItem>
      <ListItem>
        <IconAvatar />
      </ListItem>
      <ListItem>
        <TransparentButton onClick={onAskForLogout}>Logout</TransparentButton>
      </ListItem>
    </List>
  );
};
