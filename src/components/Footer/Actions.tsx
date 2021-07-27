import { ActionList, Popover, Button } from "@shopify/polaris";
import { useCallback } from "react";
import { useState } from "react";

export default function Actions() {
  const [active, setActive] = useState(false);

  const toggleActive = useCallback(() => setActive((active) => !active), []);

  const handleDeleteTemplate = useCallback(() => {
    setActive(false);
    console.log("delete template");
  }, []);

  const handleDuplicateTemplate = useCallback(() => {
    setActive(false);
    console.log("duplicate template");
  }, []);

  const activator = (
    <Button onClick={toggleActive} disclosure>
      Actions
    </Button>
  );

  return (
    <div>
      <Popover active={active} activator={activator} onClose={toggleActive}>
        <ActionList
          items={[
            {
              content: "Delete template",
              destructive: true,
              onAction: handleDeleteTemplate,
            },
            {
              content: "Duplicate template",
              onAction: handleDuplicateTemplate,
            },
          ]}
        />
      </Popover>
    </div>
  );
}
