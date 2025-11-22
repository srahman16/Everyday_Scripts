'''
Title: Create folders in a directory
Author: Shahriar Rahman
Email: shahriar.env12@gmail.com
Date: 23 November 2025
'''
# Simple script to create customised folders in a directory
import os
target_dir = "Your directory"
folder_names = ["Folder1", "Folder2", "Folder3"] # Change the names of the folders according to your need

for name in folder_names:
    full_path = os.path.join(target_dir, name)
    os.makedirs(full_path, exist_ok=True)
    print(f"Created: {full_path}")
print("Done!")
