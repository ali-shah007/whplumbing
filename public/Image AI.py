import cv2

# Load pre-trained Haar Cascade for number plate detection
plate_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_russian_plate_number.xml')

# Function to hide the number plate by drawing a white rectangle
def hide_number_plate(image_path):
    # Read the image
    img = cv2.imread(image_path)

    if img is None:
        print("Error: Unable to read the image. Check the file path.")
        return

    # Convert the image to grayscale for plate detection
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Detect number plates in the image using modified parameters
    plates = plate_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

    # If plates are detected, draw rectangles and hide them
    if len(plates) == 0:
        print("No number plates detected.")
    else:
        print(f"Detected {len(plates)} plate(s).")
        for (x, y, w, h) in plates:
            # Draw a white rectangle over the detected number plate area
            cv2.rectangle(img, (x, y), (x + w, y + h), (255, 255, 255), -1)  # White rectangle with thickness -1 to fill it
            # Optional: Draw a green rectangle to visualize the detected plate (before hiding)
            cv2.rectangle(img, (x, y), (x + w, y + h), (0, 255, 0), 2)

    # Save the modified image
    output_image_path = 'output_image_with_hidden_plate.jpg'
    cv2.imwrite(output_image_path, img)

    # Display the result (optional)
    cv2.imshow("Image with Hidden Number Plate", img)
    cv2.waitKey(0)
    cv2.destroyAllWindows()

    return output_image_path

# Example usage:
image_path = r"C:\Users\User\Documents\Projects\microtechsports\public\Cars\Audi\A4 blue 2022\2.jpg"  # Path to the car image
output_image = hide_number_plate(image_path)
if output_image:
    print(f"Modified image saved at: {output_image}")
