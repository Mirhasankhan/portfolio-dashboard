import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Divider, Row } from "antd";
import CustomForm from "../components/form/CustomForm";
import CustomInput from "../components/form/CustomInput";
import { useCreateProjectMutation } from "../redux/features/project/project.api";

const AddProject = () => {
  const [createProject] = useCreateProjectMutation();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    createProject(data);
  };
  return (
    <div className="w-4/5 mx-auto">
      <Divider>Project Details</Divider>
      <Row justify="center">
        <Col span={24}>
          <CustomForm onSubmit={onSubmit}>
            <Row gutter={8}>
              <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                <CustomInput
                  placeholder="Project Name"
                  type="text"
                  name="projectName"
                  label="Project Name"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                <CustomInput
                  placeholder="features"
                  type="text"
                  name="features"
                  label="Project Features"
                />
              </Col>
            </Row>
            <Row gutter={8}>
              <Col span={24} md={{ span: 12 }} lg={{ span: 24 }}>
                <CustomInput
                  placeholder="Project Description"
                  type="text"
                  name="description"
                  label="Project Description"
                />
              </Col>
            </Row>
            <Divider>Project Links</Divider>
            <Row gutter={8}>
              <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                <CustomInput
                  placeholder="live link"
                  type="url"
                  name="liveLink"
                  label="Live Link"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                <CustomInput
                  placeholder="server link"
                  type="url"
                  name="serverLink"
                  label="Github Server Link"
                />
              </Col>
            </Row>
            <Row gutter={8}>
              <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                <CustomInput
                  placeholder="client link"
                  type="url"
                  name="clientLink"
                  label="Github Client Link"
                />
              </Col>
            </Row>

            <Button
              className="w-full bg-orange-400 text-white  font-semibold"
              htmlType="submit"
            >
              Add Project
            </Button>
          </CustomForm>
        </Col>
      </Row>
    </div>
  );
};

export default AddProject;
