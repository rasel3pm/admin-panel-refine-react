
import { IResourceComponentsProps } from "@pankod/refine-core";

import {
    useForm,
    Form,
    Input,
    Select,
    Edit,
    useSelect,
} from "@pankod/refine-antd";

import { IUser } from "interfaces";

export const UserEdit: React.FC<IResourceComponentsProps> = () => {
    const { formProps, saveButtonProps, queryResult } = useForm<IUser>();

    const { selectProps: categorySelectProps } = useSelect<IUser>({
        resource: "users",
        defaultValue: queryResult?.data?.data.id
    });

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
            <Form.Item
                    label="firstName"
                    name="firstName"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="lastName"
                    name="lastName"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="skills"
                    name="skills"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="birthday"
                    name="birthday"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Status"
                    name="status"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        options={[
                            {
                                label: "Published",
                                value: "published",
                            },
                            {
                                label: "Draft",
                                value: "draft",
                            },
                            {
                                label: "Rejected",
                                value: "rejected",
                            },
                        ]}
                    />
                </Form.Item>
                {/* <Form.Item
                    label="Category"
                    name={["category", "id"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...categorySelectProps} />
                </Form.Item> */}
            </Form>
        </Edit>
    );
};