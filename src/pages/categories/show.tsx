import { useShow,useOne,IResourceComponentsProps } from "@pankod/refine-core"
import { Show,Typography,Tag} from "@pankod/refine-antd"
import { ICategory} from "interfaces"

const {Title,Text}=Typography
export const CategoryShow: React.FC<IResourceComponentsProps> = () => {
    const { queryResult } = useShow<ICategory>();
    const { data, isLoading } = queryResult;
    const record = data?.data;

    const { data: categoryData } = useOne<ICategory>({
        resource: "categories",
        id: record?.id || "",
        queryOptions: {
            enabled: !!record,
        },
    });

    return (
        <Show isLoading={isLoading}>

            <Title level={5}>Category</Title>
            <Text>{categoryData?.data.title}</Text>
        </Show>
    );
};