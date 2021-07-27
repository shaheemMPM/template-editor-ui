import { Button, Stack } from "@shopify/polaris";
import {
  MobileBackArrowMajor,
  ReceiptMajor,
  ImageMajor,
  InventoryMajor,
  StoreMajor,
  CustomersMajor,
  ShipmentMajor,
  PaymentsMajor,
  ListMajor,
  ChecklistMajor,
  FooterMajor,
} from "@shopify/polaris-icons";
import DropItem from "./DropItem";

export default function InnerOptions() {
  return (
    <>
      {/* header */}
      <div
        style={{
          paddingLeft: "10px",
          paddingTop: "10px",
          paddingBottom: "10px",
          borderBottom: "1px solid #dfe3e8",
        }}
      >
        <Stack alignment="center">
          <Button outline icon={MobileBackArrowMajor} />
          <strong>Options</strong>
        </Stack>
      </div>
      {/* inner */}
      <div
        style={{
          background: "#f9fafb",
          paddingTop: "20px",
          paddingBottom: "20px",
          maxHeight: "500px",
          overflowY: "scroll",
        }}
      >
        <Stack spacing="none" vertical>
          <DropItem
            title="Template"
            subtitle="Change template name, description and metadata"
            top={true}
            logo={ReceiptMajor}
          />
          <DropItem
            title="Branding & styling"
            subtitle=""
            top={false}
            logo={ImageMajor}
          />
          <DropItem
            title="Overview"
            subtitle=""
            top={false}
            logo={InventoryMajor}
          />
          <DropItem
            title="Supplier"
            subtitle=""
            top={false}
            logo={StoreMajor}
          />
          <DropItem
            title="Client"
            subtitle=""
            top={false}
            logo={CustomersMajor}
          />
          <DropItem
            title="Shipping"
            subtitle=""
            top={false}
            logo={ShipmentMajor}
          />
          <DropItem
            title="Billing"
            subtitle=""
            top={false}
            logo={PaymentsMajor}
          />
          <DropItem
            title="Line Items"
            subtitle=""
            top={false}
            logo={ChecklistMajor}
          />
          <DropItem title="Total" subtitle="" top={false} logo={ListMajor} />
          <DropItem title="Footer" subtitle="" top={false} logo={FooterMajor} />
        </Stack>
      </div>
    </>
  );
}
