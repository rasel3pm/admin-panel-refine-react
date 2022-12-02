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
    DeleteButton
} from "@pankod/refine-antd";
import { IUser} from "interfaces"
export const UserList:React.FC=()=>{
    const {tableProps}=useTable<IUser>()

    return(
        <List>
        <Table {...tableProps} rowKey="id">
            <Table.Column dataIndex="firstName" title="firstName" />
            <Table.Column dataIndex="email" title="email" />
            <Table.Column dataIndex="skills" title="skills" />
            <Table.Column
                dataIndex="createdAt"
                title="createdAt"
                render={(value) => <DateField format="LLL" value={value} />}
            />

            <Table.Column<IUser>
               title="Action"
               dataIndex="actions"
               render={(_text,record):React.ReactNode=>{
                return(
                    <Space>
                        <ShowButton size="small" recordItemId={record.id} hideText/>
                        <EditButton size="small" recordItemId={record.id} hideText/>
                        <DeleteButton size="small" recordItemId={record.id} hideText/>
                    </Space>
                )
               }}
            />
        </Table>
    </List>
    )
}