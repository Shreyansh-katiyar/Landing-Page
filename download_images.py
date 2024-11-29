import os
import requests
from PIL import Image
from io import BytesIO

# Create images directory if it doesn't exist
if not os.path.exists('images'):
    os.makedirs('images')

# List of placeholder image URLs (using placeholder.com for demo)
image_files = [
    ('red-tape-casual.jpg', 'https://via.placeholder.com/400x300.jpg?text=Red+Tape+Casual'),
    ('red-tape-formal.jpg', 'https://via.placeholder.com/400x300.jpg?text=Red+Tape+Formal'),
    ('red-tape-boots.jpg', 'https://via.placeholder.com/400x300.jpg?text=Red+Tape+Boots'),
    ('red-tape-loafers.jpg', 'https://via.placeholder.com/400x300.jpg?text=Red+Tape+Loafers'),
    ('red-tape-running.jpg', 'https://via.placeholder.com/400x300.jpg?text=Red+Tape+Running'),
    ('red-tape-sandals.jpg', 'https://via.placeholder.com/400x300.jpg?text=Red+Tape+Sandals')
]

# Download and save images
for filename, url in image_files:
    response = requests.get(url)
    if response.status_code == 200:
        img = Image.open(BytesIO(response.content))
        img.save(os.path.join('images', filename))
        print(f'Downloaded {filename}')
