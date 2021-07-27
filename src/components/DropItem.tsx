import { Icon, Stack, TextStyle } from "@shopify/polaris";
import "./DropItem.css";

interface PropsType {
  title: string;
  subtitle: string;
  logo: any;
  top: boolean;
}

export default function DropItem(props: React.PropsWithChildren<PropsType>) {
  return (
    <div
      className="drop-item"
      style={{
        padding: "10px 15px",
        borderBottom: "1px solid #dfe3e8",
        borderTop: props.top ? "1px solid #dfe3e8" : "none",
        background: "white",
        height: "70px",
        display: "flex",
        alignContent: "center",
      }}
    >
      <Stack spacing="loose" alignment="center" wrap={false}>
        <Icon source={props.logo} />
        <Stack spacing="tight" vertical>
          <TextStyle>{props.title}</TextStyle>
          {props.subtitle ? (
            <TextStyle variation="subdued">{props.subtitle}</TextStyle>
          ) : null}
        </Stack>
      </Stack>
    </div>
  );
}
