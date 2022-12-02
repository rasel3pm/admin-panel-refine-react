import { useMany } from "@pankod/refine-core";
import {
  List,
  Table,
  DateField,
  useTable,
  TagField,
  FilterDropdown,
  Select,
  useSelect,
  ShowButton,
  EditButton,
  Space,
  DeleteButton,
} from "@pankod/refine-antd";
import { ICategory } from "interfaces";
export const CategoryList: React.FC = () => {
  const { tableProps } = useTable<ICategory>();

  const categoryIds = tableProps?.dataSource?.map((item) => item.title) ?? [];

  const { data: categoriesData, isLoading } = useMany<ICategory>({
    resource: "categories",
    ids: categoryIds,
    queryOptions: {
      enabled: categoryIds.length > 0,
    },
  });
  const { selectProps: categorySelecProps } = useSelect<ICategory>({
    resource: "categories",
  });
  const { selectProps: categorySelectProps } = useSelect<ICategory>({
    resource: "categories",
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="title" title="title" />
        <Table.Column
          dataIndex="status"
          title="status"
          render={(value) => <TagField value={value} />}
        />
        <Table.Column
          dataIndex="createdAt"
          title="createdAt"
          render={(value) => <DateField format="LLL" value={value} />}
        />

        <Table.Column
          filterDropdown={(props) => (
            <FilterDropdown {...props}>
              <Select
                style={{ minWidth: 200 }}
                mode="multiple"
                placeholder="Select Category"
                {...categorySelectProps}
              />
            </FilterDropdown>
          )}
        />
        <Table.Column<ICategory>
          title="Action"
          dataIndex="actions"
          render={(_text, record): React.ReactNode => {
            return (
              <Space>
                <ShowButton size="small" recordItemId={record.id} hideText />
                <EditButton size="small" recordItemId={record.id} hideText />
                <DeleteButton size="small" recordItemId={record.id} hideText />
              </Space>
            );
          }}
        />
      </Table>
    </List>
  );
};
