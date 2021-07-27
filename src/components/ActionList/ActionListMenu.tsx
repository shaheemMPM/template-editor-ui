import { Icon, ActionList } from "@shopify/polaris";

import { ChevronRightMinor } from "@shopify/polaris-icons";
import { actionsList } from "./ListItems";

function ActionListMenu({ panelHandler }) {
  const iconRight = <Icon source={ChevronRightMinor} />;

  return (
    <div>
      <ActionList
        items={actionsList.map((el) => ({
          content: el.title,
          prefix: <Icon source={el.prefix} />,
          suffix: iconRight,
          onAction: () => {
            panelHandler(el);
          },
        }))}
      />
    </div>
  );
}

export default ActionListMenu;
