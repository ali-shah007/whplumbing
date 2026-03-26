import os
from PIL import Image

def convert_and_resize_images_to_jpg(folder_path):
    # Check if the folder exists
    if not os.path.exists(folder_path):
        print(f"The folder '{folder_path}' does not exist.")
        return

    # Iterate through all files in the folder and subfolders
    for root, dirs, files in os.walk(folder_path):
        for filename in files:
            # Check if the file is an image (by its extension)
            if filename.lower().endswith((".png", ".jfif", ".bmp", ".gif", ".tiff", ".webp", ".jpeg", ".jpg")):
                file_path = os.path.join(root, filename)
                try:
                    # Open the image
                    with Image.open(file_path) as img:
                        # Resize the image to 500 width, height adjusted proportionally
                        width = 800
                        aspect_ratio = img.height / img.width
                        new_height = int(width * aspect_ratio)
                        
                        # Resize the image while maintaining the aspect ratio
                        resized_img = img.resize((width, new_height), Image.Resampling.LANCZOS)
                        
                        # Create a new file path with a .jpg extension (replace original extension with .jpg)
                        new_file_path = os.path.splitext(file_path)[0] + ".jpg"
                        
                        # Convert the image to RGB (important for non-JPEG formats like PNG, GIF, etc.)
                        resized_img.convert('RGB').save(new_file_path, "JPEG")
                        print(f"Converted and resized '{filename}' to '{os.path.basename(new_file_path)}'.")
                        
                        # The original file is not deleted, it is kept in the folder.
                        # No removal of original file.

                except Exception as e:
                    print(f"Error processing '{filename}': {e}")

# Folder path specified directly
folder_location = r"C:\Users\97152\Documents\Projects\ies-gear-main\ies-gear-main\public\Boxing\BoxingGloves"
convert_and_resize_images_to_jpg(folder_location)
