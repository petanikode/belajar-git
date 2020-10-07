# Fungsi simple untuk mengubah sebuah angka ke radix yang di inginkan
def convert_to_base():
    input_number = input("Please enter the number to be converted: ")
    input_base = int(input("Please enter the input number's base: "))
    output_base = int(input("Please enter the output number's base: "))

    result = ''
    temp = int(input_number, input_base)

    while temp != 0:
        result += str(temp % output_base)
        temp //= output_base
    
    result = result[::-1]

    return result
