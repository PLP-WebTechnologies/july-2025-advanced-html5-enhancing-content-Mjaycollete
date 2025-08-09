#Staff & Patient Records -Key-value pairs for instant lookups
# Staff Directory (ID → Details)
staff = {
    101: {"name": "Dr. Smith", "role": "Cardiologist", "station": "ER"},
    202: {"name": "Nurse Lee", "role": "ICU", "station": "Ward 3B"},
    303: {"name": "Dr. Patel", "role": "Radiologist", "station": "Lab 2"}
}

# Patient Records (ID → Medical History)
patients = {
    "P881": {"name": "John Munae", "allergies": ["Penicillin"], "ward": "ICU"},
    "P882": {"name": "Maria Garcia", "allergies": ["Smoke"], "ward": "Ward 4A"}
}

# Access data
print("Cardiologist on duty:", staff[101]['name'])  # Dr. Smith
print("John's allergies:", patients["P881"]["allergies"])  # ['Penicillin']

# Access data
print("Nurse on duty:", staff[202]['name'])  # Nurse Lee
print("John's allergies:", patients["P881"]["allergies"])  # ['Penicillin']

print("Garcia's allergies:", patients["P882"]["allergies"]) # ['Smoke']