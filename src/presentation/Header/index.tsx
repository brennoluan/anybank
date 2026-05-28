import { Link } from "react-router-dom";
import { Container, StyledHeader, List, ListItem } from "./styles";
import { UnauthenticatedActionList } from "./UnauthenticatedActionList";
import { AuthenticatedActionList } from "./AuthenticatedActionList";
import { IconLogo } from "../../components/Icons";
import { useAuthContext } from "../../app/hooks/useAuthContext";

export const Header = () => {
  const { session } = useAuthContext();
  return (
    <StyledHeader>
      <Container>
        <List>
          <ListItem>
            <Link to="/">
              <IconLogo />
            </Link>
          </ListItem>
        </List>
        {session ? <AuthenticatedActionList /> : <UnauthenticatedActionList />}
      </Container>
    </StyledHeader>
  );
};
