import os
import zipfile
import json

absolute_path = os.path.abspath(__file__) # Absolute path of current script
parent_dir_path = os.path.dirname(os.path.dirname(os.path.dirname(absolute_path))) # Parent directory path of its own dir.
template_frontend_path = os.path.join(parent_dir_path,"template_stack","front_end_template")
template_backend_path = os.path.join(parent_dir_path,"template_stack","back_end_template")
temp_zip_path = os.path.join(parent_dir_path,"temp","FullStack.zip")
temp_config_path = os.path.join(parent_dir_path,"temp","config.json")
temp_db_config_path = os.path.join(parent_dir_path,"temp","db_config.json")
temp_readme_path = os.path.join(parent_dir_path,"temp","readme.md")


def get_template(data):
    get_config_ready(data)
    get_frontend_ready(data)
    zip_directory(os.path.join(template_backend_path,str(data["b_name"])),
    os.path.join(template_frontend_path,str(data["f_name"])))
    return (temp_zip_path)

def get_config_ready(data):
    json_string = json.dumps(data)
    with open(temp_config_path,"w") as f:
        f.write(json_string)
    db_s="{dbname : ,host : ,port : ,user : ,password : ,query :}"
    with open(temp_db_config_path,"w") as f:
        f.write(db_s)

def get_frontend_ready(data):
    if data["f_name"]=="React":
        env_path=os.path.join(template_frontend_path,str(data["f_name"]),"hello-world-example",".env")
        with open(env_path,"w") as f:
            f.write("port="+str(data["f_port"]))
        src_path=os.path.join(template_frontend_path,str(data["f_name"]),"hello-world-example","src","config.json")
        f1 = open(temp_config_path, "r")
        f2 = open(src_path, "w")
        for line in f1:
            f2.write(line) 
        f1.close()
        f2.close()

def zip_directory(f_path,b_path):
    with zipfile.ZipFile(temp_zip_path,'w',zipfile.ZIP_DEFLATED) as zipf:
        len_f_path = len(os.path.dirname(f_path))
        len_b_path = len(os.path.dirname(b_path))
        len_config_path = len(os.path.dirname(temp_config_path))
        len_db_config_path = len(os.path.dirname(temp_db_config_path))
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
        zipf.write(temp_db_config_path,temp_db_config_path[len_db_config_path:])
        zipf.write(temp_readme_path,temp_readme_path[len_readme_path:])
        