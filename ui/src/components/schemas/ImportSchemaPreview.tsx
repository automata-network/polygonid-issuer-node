import { Button, Space, Typography } from "antd";

import { ReactComponent as IconBack } from "src/assets/icons/arrow-narrow-left.svg";
import { DownloadSchema } from "src/components/schemas/DownloadSchema";
import { SchemaViewer } from "src/components/schemas/SchemaViewer";
import { Detail } from "src/components/shared/Detail";
import { JsonLdType, JsonSchema } from "src/domain";
import { getBigint, getSchemaHash } from "src/utils/iden3";

export function ImportSchemaPreview({
  jsonLdContextObject,
  jsonLdType,
  jsonSchema,
  jsonSchemaObject,
  onBack,
  onImport,
  url,
}: {
  jsonLdContextObject: Record<string, unknown>;
  jsonLdType: JsonLdType;
  jsonSchema: JsonSchema;
  jsonSchemaObject: Record<string, unknown>;
  onBack: () => void;
  onImport: () => void;
  url: string;
}) {
  const bigintResult = getBigint(jsonLdType);
  const bigint = bigintResult && bigintResult.success ? bigintResult.data : null;
  const schemaHashResult = getSchemaHash(jsonLdType);
  const schemaHash = schemaHashResult && schemaHashResult.success ? schemaHashResult.data : null;

  return (
    <SchemaViewer
      actions={
        <Space size="middle">
          <Button icon={<IconBack />} onClick={onBack} type="default">
            Previous step
          </Button>

          <Button onClick={onImport} type="primary">
            Import
          </Button>
        </Space>
      }
      contents={
        <Space direction="vertical">
          <Typography.Text type="secondary">SCHEMA DETAILS</Typography.Text>

          <Detail
            copyable={bigint !== null}
            label="BigInt"
            text={bigint || "An error occurred while calculating BigInt."}
          />

          <Detail
            copyable={schemaHash !== null}
            label="Hash"
            text={schemaHash || "An error occurred while calculating Hash."}
          />

          <Detail copyable label="URL" text={url} />

          <DownloadSchema fileName={jsonSchema.name} url={url} />
        </Space>
      }
      jsonLdContextObject={jsonLdContextObject}
      jsonLdType={jsonLdType}
      jsonSchema={jsonSchema}
      jsonSchemaObject={jsonSchemaObject}
    />
  );
}
