import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Row } from "antd";
import CustomForm from "../components/form/CustomForm";
import CustomInput from "../components/form/CustomInput";
import { useAddSkillMutation } from "../redux/features/skill/skill.api";

const AddSkill = () => {
  const [createSkill] = useAddSkillMutation();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    createSkill(data);
  };
  return (
    <div>
      <h1 className="text-center text-3xl font-bold py-8">Add Your Skills</h1>
      <div className="shadow-xl border rounded-lg p-4 w-4/5 mx-auto mt-6">
        <Row justify="center">
          <Col span={24}>
            <CustomForm onSubmit={onSubmit}>
              <Row gutter={8}>
                <Col span={24} md={{ span: 12 }} lg={{ span: 24 }}>
                  <CustomInput
                    placeholder="Skill Name"
                    type="text"
                    name="skillName"
                    label="Skill Name"
                  />
                </Col>
              </Row>
              <Row gutter={8}>
                <Col span={24}>
                  <CustomInput
                    placeholder="Skill Image Link"
                    type="link"
                    name="image"
                    label="Skill Image"
                  />
                </Col>
              </Row>

              <Button
                className="w-full bg-orange-400 text-white  font-semibold"
                htmlType="submit"
              >
                Add Skill
              </Button>
            </CustomForm>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AddSkill;
