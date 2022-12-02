import { useShow,useOne,IResourceComponentsProps } from "@pankod/refine-core"
import { Show,Typography,Tag} from "@pankod/refine-antd"
import { IUser} from "interfaces"

const {Title,Text}=Typography
export const UserShow: React.FC<IResourceComponentsProps> = () => {
    const { queryResult } = useShow<IUser>();
    const { data, isLoading } = queryResult;
    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>Title</Title>
            <Text>{record?.firstName}</Text>

            <Title level={5}>Title</Title>
            <Text>{record?.lastName}</Text>

            <Title level={5}>Status</Title>
            <Text>
                <Tag>{record?.status}</Tag>
            </Text>
        </Show>
    );
};