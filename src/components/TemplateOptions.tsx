import { Checkbox, Icon, Stack, TextField, TextStyle } from "@shopify/polaris";
import { MobileChevronMajor } from "@shopify/polaris-icons";

export default function TemplateOptions() {
  return (
    <>
      {/* header */}
      <div
        style={{
          paddingLeft: "10px",
          paddingTop: "10px",
          paddingBottom: "10px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid #dfe3e8",
        }}
      >
        <Stack alignment="center">
          <Icon source={MobileChevronMajor} />
          <strong>Template</strong>
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
          {/* template */}
          <div
            style={{
              padding: "20px",
              borderBottom: "1px solid #dfe3e8",
              borderTop: "1px solid #dfe3e8",
              background: "white",
            }}
          >
            <Stack vertical spacing="none">
              <TextStyle variation="strong">TEMPLATE</TextStyle>
              <br />
              <TextField
                label="Template name"
                placeholder="Enter template name"
                onChange={() => {
                  console.log("test");
                }}
              />
              <br />
              <TextField
                label="Description"
                placeholder="Enter template description"
                multiline={2}
                onChange={() => {
                  console.log("test");
                }}
              />
              <br />
              <Checkbox
                label="Print as default"
                onChange={() => {
                  console.log("test");
                }}
              />
            </Stack>
          </div>
          {/* template */}
          <div
            style={{
              padding: "20px",
              borderBottom: "1px solid #dfe3e8",
              borderTop: "1px solid #dfe3e8",
              background: "white",
            }}
          >
            <Stack vertical spacing="none">
              <TextStyle variation="strong">CURRENCY</TextStyle>
              <br />
              <Checkbox
                label="Auto detect currency"
                helpText={
                  <span>
                    Template will detect and display your customer currency
                    automatically
                  </span>
                }
                onChange={() => {
                  console.log("test");
                }}
              />
            </Stack>
          </div>
        </Stack>
      </div>
    </>
  );
}
