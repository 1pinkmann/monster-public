export const serializerParams = ({
  email = '-',
  first_name = '-',
  last_name = '-',
  phone = '-',
  message = '-',
  child_1_firt_name = '-',
  child_1_last_name = '-',
  child_1_age = '-',
  child_1_grade = '-',
  child_2_firt_name = '-',
  child_2_last_name = '-',
  child_2_age = '-',
  child_2_grade = '-',
  ip = '-',
  type = '-'
}) => {
  const params = "first_name=" + first_name +
                 "&last_name=" + last_name +
                 "&email=" + email +
                 "&phone='" + phone +
                 "&child_1_firt_name=" + child_1_firt_name +
                 "&child_1_last_name=" + child_1_last_name +
                 "&child_1_age=" + child_1_age +
                 "&child_1_grade=" + child_1_grade +
                 "&child_2_firt_name=" + child_2_firt_name +
                 "&child_2_last_name=" + child_2_last_name +
                 "&child_2_age=" + child_2_age +
                 "&child_2_grade=" + child_2_grade +
                 "&mesage=" + message +
                 "&ip=" + ip + 
                 "&type=" + type
  return params
}
