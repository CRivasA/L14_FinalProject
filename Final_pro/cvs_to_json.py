import pandas as pd

csv_file_path = 'menu.csv'
json_file_path = 'data.json'

# Read CSV file into a Pandas DataFrame
df = pd.read_csv(csv_file_path)

# Convert DataFrame to JSON and save to a file
df.to_json(json_file_path, orient='records', indent=2)

print(f"Conversion complete. JSON file saved to {json_file_path}")

