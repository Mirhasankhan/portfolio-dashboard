import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Row } from "antd";
import CustomForm from "../components/form/CustomForm";
import CustomInput from "../components/form/CustomInput";
import "react-quill/dist/quill.snow.css";
import { useAddBlogMutation } from "../redux/features/blog/blog.api";
import { useState } from "react";
import ReactQuill from "react-quill";

const AddBlog = () => {
  const [content, setContent] = useState("");

  const handleChange = (value: string) => {
    setContent(value);
  };

  const [createBlog] = useAddBlogMutation();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const newBlog = {
      ...data,
      content: content,
    };
    createBlog(newBlog);
  };
  return (
    <div>
      <h1 className="text-center text-3xl font-bold py-8">Add Your Blog</h1>
      <div className="shadow-xl border rounded-lg p-4 w-4/5 mx-auto mt-6">
        <Row justify="center">
          <Col span={24}>
            <CustomForm onSubmit={onSubmit}>
              <Row gutter={8}>
                <Col span={24} md={{ span: 12 }} lg={{ span: 24 }}>
                  <CustomInput
                    placeholder="Blog Name"
                    type="text"
                    name="blogName"
                    label="Blog Name"
                  />
                </Col>
              </Row>
              <Row gutter={8}>
                <Col span={24}>
                  <CustomInput
                    placeholder="Blog Image Link"
                    type="link"
                    name="image"
                    label="Blog Image"
                  />
                </Col>
              </Row>
              <Row gutter={8}>
                <Col span={24}>
                  <label className="font-semibold" htmlFor="">
                    Write Here
                  </label>
                  <ReactQuill
                    className="my-3"
                    value={content}
                    onChange={handleChange}
                  />
                </Col>
              </Row>

              <Button
                className="w-full bg-orange-400 text-white  font-semibold"
                htmlType="submit"
              >
                Add Blog
              </Button>
            </CustomForm>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AddBlog;
