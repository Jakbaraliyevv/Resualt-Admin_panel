import {
  Modal,
  Form,
  Input,
  InputNumber,
  Select,
  DatePicker,
  Row,
  Col,
} from "antd";
import { useEffect } from "react";
import dayjs from "dayjs";
import { useAxios } from "../../hooks/axios";
import { MovieModalProps } from "../../types";

const { Option } = Select;

const MovieModal: React.FC<MovieModalProps> = ({
  visible,
  onClose,
  onSubmit,
  editMode = false,
  movieData = null,
}) => {
  const [form] = Form.useForm();
  const axios = useAxios();

  useEffect(() => {
    if (editMode && movieData) {
      form.setFieldsValue({
        ...movieData,
        availableDate: movieData.availableDate
          ? dayjs(movieData.availableDate)
          : null,
        availableTime: movieData.availableTime
          ? dayjs(movieData.availableTime, "HH:mm") // Dayjs uchun formatni tekshirish
          : dayjs(Date.now()).format("HH:mm"),
      });
    } else {
      form.resetFields();
    }
  }, [editMode, movieData, form]);

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        // availableTime qiymatini dayjs bilan tekshirib olish
        const formattedData = {
          ...values,
          availableDate: values.availableDate?.format("YYYY-MM-DD"), // Sana formatini to'g'ri o'rnatish
          availableTime: values.time
            ? dayjs(values.time).format("HH:mm") // Sekundlarni chiqarib tashlash
            : dayjs(Date.now()).format("HH:mm"), // Hozirgi vaqtni faqat HH:mm formatida olish
        };

        const url = editMode
          ? `/movie/movies/${movieData?._id}`
          : "/movie/movies";
        const method = editMode ? "PUT" : "POST";

        axios({ method, url, data: formattedData })
          .then((response) => {
            console.log(
              editMode
                ? "Movie updated successfully"
                : "Movie added successfully",
              response.data
            );
            onSubmit(formattedData);
            form.resetFields();
            onClose();
          })
          .catch((error) => {
            console.error(
              editMode ? "Failed to update movie:" : "Failed to add movie:",
              error.response?.data || error.message
            );
          });
      })
      .catch((info) => {
        console.log("Validation Failed:", info);
      });
  };

  return (
    <Modal
      title={editMode ? "Edit Movie" : "Add New Movie"}
      open={visible}
      onOk={handleOk}
      onCancel={onClose}
      width={800}
      style={{ top: 0, height: "100vh" }}
      bodyStyle={{ maxHeight: "85vh", overflowY: "auto", padding: "20px" }}
    >
      <Form form={form} layout="vertical">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="title" label="Title" rules={[{ required: true }]}>
              <Input placeholder="Enter movie title" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="ageRestriction"
              label="Age Restriction"
              rules={[{ required: true }]}
            >
              <InputNumber
                min={0}
                placeholder="Enter age limit"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="image"
              label="Image URL"
              rules={[{ required: true }]}
            >
              <Input placeholder="Paste image URL" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="targetAudience"
              label="Target Audience"
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter audience type" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="genre" label="Genre" rules={[{ required: true }]}>
              <Select mode="multiple" placeholder="Select genres">
                <Option value="Drama">Drama</Option>
                <Option value="Horror">Horror</Option>
                <Option value="Comedy">Comedy</Option>
                <Option value="Sci-Fi">Sci-Fi</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="availableDate"
              label="Available Date"
              rules={[{ required: true }]}
            >
              <DatePicker style={{ width: "100%" }} placeholder="Select date" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="availableTime"
              label="Available Time"
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter time (HH:mm)" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="format"
              label="Format"
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter format (e.g. 2D, 3D)" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="price" label="Price" rules={[{ required: true }]}>
              <InputNumber min={0} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="hallNumber"
              label="Hall Number"
              rules={[{ required: true }]}
            >
              <InputNumber min={1} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="director"
              label="Director"
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter director name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="duration"
              label="Duration (mins)"
              rules={[{ required: true }]}
            >
              <InputNumber min={1} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="country"
              label="Country"
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter country" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="year" label="Year" rules={[{ required: true }]}>
              <InputNumber
                min={1900}
                max={new Date().getFullYear()}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true }]}
            >
              <Input.TextArea rows={3} placeholder="Enter description" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="count" label="Count" rules={[{ required: true }]}>
              <InputNumber min={0} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default MovieModal;
