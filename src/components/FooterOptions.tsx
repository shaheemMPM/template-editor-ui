import { Card, Stack, Button } from "@shopify/polaris";
import { useCallback } from "react";
import Actions from "./Actions";

export default function FooterOptions() {
  const handleChangeLayout = useCallback(() => {
    console.log("change layout");
  }, []);

  return (
    <div
      style={{
        boxShadow:
          "rgb(63 63 68 / 5%) 0 0 0 1px, rgb(63 63 68 / 15%) 0 -1px 3px 0",
      }}
    >
      <Card.Section>
        <Stack distribution="equalSpacing">
          <Actions />
          <Button onClick={handleChangeLayout}>Change Layout</Button>
        </Stack>
      </Card.Section>
    </div>
  );
}
