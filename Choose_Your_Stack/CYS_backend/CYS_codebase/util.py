import os
import zipfile
import json

absolute_path = os.path.abspath(__file__) # Absolute path of current script
parent_dir_path = os.path.dirname(os.path.dirname(os.path.dirname(absolute_path))) # Parent directory path of its own dir.
template_frontend_path = os.path.join(parent_dir_path,"template_stack","front_end_template")
template_backend_path = os.path.join(parent_dir_path,"template_stack","back_end_template")
temp_zip_path = os.path.join(parent_dir_path,"temp","FullStack.zip")
temp_config_path = os.path.join(parent_dir_path,"temp","config.json")
temp_readme_path = os.path.join(parent_dir_path,"temp","readme.md")


def get_template(data):
    get_config(data)
    zip_directory(os.path.join(template_backend_path,str(data["b_name"])),
    os.path.join(template_frontend_path,str(data["f_name"])))
    return (temp_zip_path)

def get_config(data):
    json_string = json.dumps(data)
    with open(temp_config_path,"w") as f:
        f.write(json_string)

def zip_directory(f_path,b_path):
    with zipfile.ZipFile(temp_zip_path,'w',zipfile.ZIP_DEFLATED) as zipf:
        len_f_path = len(os.path.dirname(f_path))
        len_b_path = len(os.path.dirname(b_path))
        len_config_path = len(os.path.dirname(temp_config_path))
        len_readme_path = len(os.path.dirname(temp_readme_path))
        for root, _, files in os.walk(f_path):
            for file in files:
                file_path = os.path.join(root, file)
                zipf.write(file_path, file_path[len_f_path:])
        for root, _, files in os.walk(b_path):
            for file in files:
                file_path = os.path.join(root, file)
                zipf.write(file_path, file_path[len_b_path:])
        zipf.write(temp_config_path,temp_config_path[len_config_path:])
        zipf.write(temp_readme_path,temp_readme_path[len_readme_path:])
        