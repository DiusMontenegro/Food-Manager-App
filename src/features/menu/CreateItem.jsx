import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createItem } from "../../services/apiMenu";
import toast from "react-hot-toast";
import { serverTimestamp } from "firebase/firestore";
import FormRow from "../../ui/FormRow";

function CreateItem() {
    const { register, handleSubmit, reset, formState } = useForm();
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { errors } = formState;

    const { mutate, isLoading: isCreating } = useMutation({
        mutationFn: createItem,
        onSuccess: () => {
            toast.success("A new product has been added");

            queryClient.invalidateQueries({
                queryKey: ["menu"],
            });

            reset();
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    function onSubmit(data) {
        const newProduct = {
            ...data,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
        };

        mutate(newProduct);
    }

    function onError(errors) {
        return errors;
    }

    return (
        <div className="p-2 md:p-6">
            <form
                onSubmit={handleSubmit(onSubmit, onError)}
                className="mx-auto max-w-lg rounded-md bg-white p-6 shadow-lg md:px-8 lg:px-10"
            >
                <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
                    Add new product
                </h2>

                <FormRow label="Category" error={errors?.category?.message}>
                    <select
                        id="category"
                        name="category"
                        {...register("category", {
                            required: "This field is required",
                        })}
                        className="select select-accent mt-1 block w-full rounded-md border p-2 focus:ring-accent"
                    >
                        <option value="">Select a Category</option>
                        <option value="food">Food</option>
                        <option value="beverage">Beverage</option>
                        <option value="snack">Snack</option>
                    </select>
                </FormRow>

                <FormRow label="Name" error={errors?.name?.message}>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        {...register("name", {
                            required: "This field is required",
                        })}
                        placeholder="Enter product name"
                        className="input input-bordered input-accent mt-1 w-full rounded-md"
                    />
                </FormRow>

                <FormRow label="Size" error={errors?.size?.message}>
                    <select
                        id="size"
                        name="size"
                        {...register("size", {
                            required: "This field is required",
                        })}
                        className="select select-accent mt-1 block w-full rounded-md border p-2 focus:ring-accent"
                    >
                        <option value="">Select a size</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="extra-large">Extra Large</option>
                    </select>
                </FormRow>

                <FormRow label="Price ($)" error={errors?.price?.message}>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        placeholder="Enter price"
                        step="0.01"
                        {...register("price", {
                            required: "This field is required",
                            min: {
                                value: 0.01,
                                message: "Price should be atleast $0.01",
                            },
                        })}
                        className="input input-bordered input-accent mt-1 w-full rounded-md"
                    />
                </FormRow>

                <FormRow label="Cost ($)" error={errors?.cost?.message}>
                    <input
                        type="number"
                        id="cost"
                        name="cost"
                        placeholder="Enter cost"
                        step="0.01"
                        {...register("cost", {
                            required: "This field is required",
                            min: {
                                value: 0.01,
                                message: "Cost should be atleast $0.01",
                            },
                        })}
                        className="input input-bordered input-accent mt-1 w-full rounded-md"
                    />
                </FormRow>

                <FormRow label="Amount in Stock" error={errors?.stock?.message}>
                    <input
                        type="number"
                        id="stock"
                        name="stock"
                        {...register("stock", {
                            required: "This field is required",
                            min: {
                                value: 0.01,
                                message: "Stocks should be atleast 1",
                            },
                        })}
                        placeholder="Enter amount in stock"
                        className="input input-bordered input-accent mt-1 w-full rounded-md"
                    />
                </FormRow>

                <button
                    type="submit"
                    className="btn btn-accent mb-1 w-full rounded-md text-[#f2f2f2]"
                    disabled={isCreating}
                >
                    {isCreating ? "Adding new product..." : "Submit"}
                </button>
                <button
                    type="reset"
                    className="btn btn-ghost w-full rounded-md"
                    onClick={() => navigate(-1)}
                >
                    Cancel
                </button>
            </form>
        </div>
    );
}

export default CreateItem;
