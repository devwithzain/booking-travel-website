import Link from "next/link";
import Image from "next/image";
import { blogsData } from "@/constants";

export default function BlogSection() {
	return (
		<div className="w-full padding-x padding-y">
			<div className="w-[70%] flex items-center justify-center flex-col gap-14 mx-auto">
				<div>
					<h2 className="heading leading-tight text-black font-bold">
						Latest Blogs & News
					</h2>
				</div>
				<div className="w-full grid grid-cols-2 gap-8">
					<Link
						href={`/blogs/${blogsData[0].id}`}
						className="w-full group">
						<div>
							<Image
								src={blogsData[0].image}
								alt={blogsData[0].title}
								width={800}
								height={600}
								className="w-full h-full object-cover rounded-xl"
							/>
						</div>
						<div className="py-2">
							<h2 className="text-3xl font-bold leading-tight text-black tracking-wide group-hover:text-[#5143d9] transition-colors duration-300 cursor-pointer">
								{blogsData[0].title}
							</h2>
						</div>
					</Link>
					<div className="space-y-8">
						{blogsData.slice(1).map((blog) => (
							<Link
								key={blog.id}
								href={`/blogs/${blog.id}`}
								className="flex gap-5 items-center group">
								<Image
									src={blog.image}
									alt={blog.title}
									width={150}
									height={150}
									className="rounded-2xl object-cover shrink-0"
								/>
								<div>
									<h3 className="text-xl font-bold mb-2 leading-tight group-hover:text-[#5143d9] transition-colors duration-300 cursor-pointer">
										{blog.title}
									</h3>
									<p className="text-gray-500">{blog.author}</p>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
