import os
import zipfile
from os.path import basename

absolute_path = os.path.abspath(__file__) # Absolute path of current script
parent_dir_path = os.path.dirname(os.path.dirname(os.path.dirname(absolute_path))) # Parent directory path of its own dir.
template_frontend_path = parent_dir_path+"\\template_stack\\front_end_template\\"
template_backend_path = parent_dir_path+"\\template_stack\\back_end_template\\"
temp_zip_path = parent_dir_path+"\\temp\\FullStack.zip"
def get_template(data):
    zip_directory(template_backend_path+str(data["b_name"]),template_frontend_path+str(data["f_name"]))
    return (temp_zip_path)
    pass
def get_front_end_template(data):
    pass
def get_back_end_template(data):
    pass
def get_config(data):
    pass
def zip_directory(f_path,b_path):
    with zipfile.ZipFile(temp_zip_path,'w',zipfile.ZIP_DEFLATED) as zipf:
        len_f_path = len(os.path.dirname(f_path))
        len_b_path = len(os.path.dirname(b_path))
        for root, _, files in os.walk(f_path):
            for file in files:
                file_path = os.path.join(root, file)
                zipf.write(file_path, file_path[len_f_path:])
        for root, _, files in os.walk(b_path):
            for file in files:
                file_path = os.path.join(root, file)
                zipf.write(file_path, file_path[len_b_path:])